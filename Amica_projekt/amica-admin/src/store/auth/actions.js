import { firestoreAction } from 'vuexfire'
import User from '../../models/User.js'

export const addUserToUsersCollection = async (state, userRef) => {
  const { email, firstName, lastName } = state,
    user = new User({ email })

  return userRef.set(user)
}

export const createNewUser = async function ({ dispatch, commit }, data) {
  const $fb = this.$fb
  const { email, password } = data
  const fbAuthResponse = await $fb.createUserWithEmail(email, password)
  const id = fbAuthResponse.user.uid
  const userRef = $fb.userRef('users', id)
  return addUserToUsersCollection({ email }, userRef)
}

export const loginUser = async function ({ commit }, payload) {
  const $fb = this.$fb
  const { email, password } = payload
  return $fb.loginWithEmail(email, password)
}

export const logoutUser = async function ({ commit }, payload) {
  await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('currentUser') })
  this.$fb.logoutUser()
}

export function routeUserToAuth () {
  // eslint-disable-next-line handle-callback-err
  this.$router.push({ path: '/login' }).catch(err => { })
}
