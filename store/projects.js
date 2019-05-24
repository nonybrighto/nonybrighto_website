/* eslint-disable no-console */
import 'firebase/firestore'
import { firestore } from '../plugins/firebase'
import { unslug } from '../helpers/string-helper'

export const state = () => ({
  tags: [],
  projects: [],
  homeProjects: [],
  completeProjects: [],
  currentProject: null,
  loading: false,
  error: ''
})

export const mutations = {
  setTags(state, tags) {
    state.tags = tags
  },
  setProjects(state, projects) {
    state.projects = projects
  },
  setHomeProjects(state, projects) {
    state.homeProjects = projects
  },
  setCompleteProjects(state, projects) {
    state.completeProjects = projects
  },
  setCurrentProject(state, project) {
    state.currentProject = project
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  }
}

export const actions = {
  async getTags({ commit, state }) {
    if (state.tags.length === 0) {
      const tagsSnapshot = await firestore.collection('tags').get()
      const tags = tagsSnapshot.docs.map(tags => {
        return { id: tags.id, ...tags.data() }
      })
      commit('setTags', tags)
    }
  },
  async getProjects({ commit, state }) {
    // eslint-disable-next-line no-console
    console.log('getting projects')
    if (state.projects.length === 0) {
      commit('setLoading', true)
      commit('setError', '')
      try {
        const projectsSnapshot = await firestore.collection('projects').get()
        const projects = projectsSnapshot.docs.map(project => {
          return { id: project.id, ...project.data() }
        })
        // eslint-disable-next-line no-console
        console.log(projects)
        commit('setProjects', projects)
        commit('setLoading', false)
        commit('setError', '')
      } catch (error) {
        commit('setLoading', false)
        commit('setError', 'There was an error while getting projects')
      }
    }
  },
  async getHomeProjects({ commit, state }) {
    // eslint-disable-next-line no-console
    if (state.homeProjects.length === 0) {
      try {
        const projectsSnapshot = await firestore
          .collection('projects')
          .where('homeProject', '==', true)
          .get()
        const projects = projectsSnapshot.docs.map(project => {
          return { id: project.id, ...project.data() }
        })
        commit('setHomeProjects', projects)
      } catch (error) {
        // log error
      }
    }
  },
  async getProject({ commit, state }, projectSlugName) {
    const name = unslug(projectSlugName)
    const project = state.completeProjects.find(
      project => project.name === name
    )
    if (project) {
      commit('setCurrentProject', project)
    } else {
      try {
        let project = {}
        if (state.projects.length > 0) {
          project = state.projects.find(project => project.name === name)
        } else {
          // get project form network
          const projectsSnapshot = await firestore
            .collection('projects')
            .where('name', '==', name)
            .get()

          project = {
            id: projectsSnapshot.docs[0].id,
            ...projectsSnapshot.docs[0].data()
          }
        }
        commit('setCurrentProject', project)

        const projectDoc = await firestore
          .collection('projectContents')
          .doc(project.id)
          .get()

        const completeProject = { ...project, ...projectDoc.data() }
        commit('setCurrentProject', completeProject)
        commit('setCompleteProjects', [
          ...state.completeProjects,
          completeProject
        ])
      } catch (error) {
        // log something or so
      }
    }
  }
}

export const getters = {
  getRecentProjects: state => {
    // eslint-disable-next-line no-console
    console.log('in get recent')
    // eslint-disable-next-line no-console
    console.log(state.projects)
    return state.projects.slice(0, 10)
  },
  getProjectsByTag: state => tagName => {
    // eslint-disable-next-line no-console
    console.log('getting project for tag' + tagName)
    return state.projects.filter(project => project.tags.includes(tagName))
  }
}
