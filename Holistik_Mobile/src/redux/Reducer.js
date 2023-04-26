const initialState = {
  userId: '',
  latitude: '0',
  longitude: '0',
  onesignalID: '0',
  username: '',
  employeeName: '',
  lastLat: '',
  lastLong: '',

  profile: [
    {
      nama: '',
      npk: '',
      position: '',
      username: '',
      workingArea: '',
      tanggalJoin: '',
      email: '',
      location: '',
    },
  ],

  dataTask: [],
  dataTaskDone: [],
  dataTaskToDo: [],

  dataPTP: [],

  dataHome: '',

  tmpTask: [
    {
      Agrement_No: '',
      Application_ID: '',
      Collector_ID: '',
      Branch_ID: '',
    },
  ],

  tmpVisit: [
    {
      Jawaban: '',
    },
  ],

  tmpCall: [
    {
      Jawaban: '',
    },
  ],

  Q1final: [],

  finalActivity: [],

  question2: '',

  ResultQuestionVisit: '',

  ResultQuestionCall: '',

  totalPTPPage: '',

  totalPTPBroken: '',

  token: '',

  password: '',

  totalNotif: '',

  unReadNotif: '',

  detailsNotif: '',

  logAcessSave: 0,

  questionGroupId: '',

  questionTypeGroupId: '',

  customerType: '',

  dataDetailHistory: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setUserId':
      return {
        ...state,
        userId: action.payload,
      };
    case 'setLatitude':
      return {
        ...state,
        latitude: action.payload,
      };
    case 'setLongitude':
      return {
        ...state,
        longitude: action.payload,
      };
    case 'setOnesignalID':
      return {
        ...state,
        onesignalID: action.payload,
      };
    case 'setOneSignalDevice':
      return {
        ...state,
        oneSignalDevice: action.payload,
      };

    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };

    case 'setProfile':
      return {
        ...state,
        profile: action.payload,
      };

    case 'setLastLat':
      return {
        ...state,
        lastLat: action.payload,
      };

    case 'setLastLong':
      return {
        ...state,
        lastLong: action.payload,
      };

    case 'setTmpTask':
      return {
        ...state,
        tmpTask: action.payload,
      };

    case 'setTmpVisit':
      return {
        ...state,
        tmpVisit: action.payload,
      };

    case 'setTmpCall':
      return {
        ...state,
        tmpCall: action.payload,
      };

    case 'setQuestion2':
      return {
        ...state,
        question2: action.payload,
      };

    case 'setQ1final':
      return {
        ...state,
        Q1final: action.payload,
      };

    case 'setFinalActivity':
      return {
        ...state,
        finalActivity: action.payload,
      };

    case 'setQ1final2':
      return {
        ...state,
        Q1final2: action.payload,
      };

    case 'setDataTask':
      return {
        ...state,
        dataTask: action.payload,
      };

    case 'setDataTaskDone':
      return {
        ...state,
        dataTaskDone: action.payload,
      };

    case 'setDataTaskToDo':
      return {
        ...state,
        dataTaskToDo: action.payload,
      };

    case 'setDataPTP':
      return {
        ...state,
        dataPTP: action.payload,
      };

    case 'setDataHome':
      return {
        ...state,
        dataHome: action.payload,
      };

    case 'setResultQuestionVisit':
      return {
        ...state,
        ResultQuestionVisit: action.payload,
      };

    case 'setResultQuestionCall':
      return {
        ...state,
        ResultQuestionCall: action.payload,
      };

    case 'setTotalPTPPage':
      return {
        ...state,
        totalPTPPage: action.payload,
      };

    case 'setTotalPTPBroken':
      return {
        ...state,
        totalPTPBroken: action.payload,
      };

    case 'setToken':
      return {
        ...state,
        token: action.payload,
      };

    case 'setPassword':
      return {
        ...state,
        password: action.payload,
      };

    case 'setTotalNotif':
      return {
        ...state,
        totalNotif: action.payload,
      };

    case 'setUnReadNotif':
      return {
        ...state,
        unReadNotif: action.payload,
      };

    case 'setDetailsNotif':
      return {
        ...state,
        detailsNotif: action.payload,
      };

    case 'setLogAcessSave':
      return {
        ...state,
        logAcessSave: action.payload,
      };

    case 'setQuestionGroupId':
      return {
        ...state,
        questionGroupId: action.payload,
      };

    case 'setQuestionTypeGroupId':
      return {
        ...state,
        questionTypeGroupId: action.payload,
      };

    case 'setCustomerType':
      return {
        ...state,
        customerType: action.payload,
      };

    case 'setDataDetailHistory':
      return {
        ...state,
        dataDetailHistory: action.payload,
      };

    case 'setEmployeeName':
      return {
        ...state,
        employeeName: action.payload,
      };
  }
}
