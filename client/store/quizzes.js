import axios from 'axios'


const SET_QUIZZES = 'SET_QUIZZES'

export const setQuizzes = (quizzes) => {
    return {
      type: SET_QUIZZES,
      quizzes,
    };
  };


  export const fetchQuizzes = () => {
    return async (dispatch) => {
      try {
        const token = window.localStorage.getItem('token');
        if (token) {
          const res = await axios.get('/api/quizzes', {
              headers: {
                authorization: token
              }
          });
          dispatch(setQuizzes(res.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
};


const initialState = [];


export default function quizzesReducer(state = initialState, action) {
    switch (action.type) {
      case SET_QUIZZES:
        return action.quizzes;
      default:
        return state;
    }
}