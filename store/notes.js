import 'firebase/firestore'
import { firestore } from '../plugins/firebase'

export const state = () => ({
  notes: [],
  loading: false,
  error: ''
})

export const mutations = {
  addNotes(state, notes) {
    state.notes = [...state.notes, ...notes]
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  }
}

export const actions = {
  async getNotes({ commit, state }) {
    if (state.notes.length === 0) {
      commit('setLoading', true)
      commit('setError', '')
      try {
        const notesSnapshot = await firestore.collection('notes').get()
        const notes = notesSnapshot.docs.map(note => {
          return { id: note.id, ...note.data() }
        })
        commit('addNotes', notes)
        commit('setLoading', false)
        commit('setError', '')
      } catch (error) {
        commit('setLoading', false)
        commit('setError', 'There was an error while getting notes')
      }
    }
  }
}
