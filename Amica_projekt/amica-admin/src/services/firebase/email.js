import firebase from 'firebase/app'
import 'firebase/auth'

/**
 * https: //firebase.google.com/docs/reference/js/firebase.auth.Auth.html#create-user-with-email-and-password
 *
 * @param {String} email - A Valid email
 * @param {String} password - Password
 *
 * @return {Promise} UserCredentials
 */
export const createUserWithEmail = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

/**
 * remove firebase auth token
 */
export const logoutUser = () => {
  return firebase.auth().signOut()
}

/**
 * @param {String} email - A Valid email
 * @param {String} password - Password
 *
 * @return {Promise} UserCredentials
 */
export const loginWithEmail = (email, password) => {
  console.log(email)
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

/**
 * @return {Promise} success-failure
 */
export const sendEmailVerification = async () => {
  return firebase.auth().currentUser.sendEmailVerification()
}
