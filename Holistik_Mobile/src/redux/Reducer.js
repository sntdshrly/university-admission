const initialState = {
  userId: '',
  Prodi: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setUserId':
      return {
        ...state,
        userId: action.payload,
      };
    case 'setProdi':
      return {
        ...state,
        Prodi: action.payload,
      };
  }
}
