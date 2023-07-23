import React, { useState, useReducer, useContext, useEffect } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  ADD_NEW_PATIENT_BEGIN,
  ADD_NEW_PATIENT_SUCCESS,
  ADD_NEW_PATIENT_ERROR,
  DELETE_MY_PATIENT,
  GET_MY_PATIENTS_BEGIN,
  GET_MY_PATIENTS_SUCCESS,
  GET_WAITING_LIST,
  GET_STATS,
  DECLINE_MY_PATIENT,
  CHANGE_PAGE,
  CHANGE_PARAM,
  CHANGE_ACTIVE,
  CHANGE_APPOINTMENT,
  CHANGE_LIKE_ARTICLE,
  DETAIL_ARTICLE,
} from "./actions";
import axios from "axios";

import reducer from "./reducer";
// import newData from "../../../server/MOCK_DATA.json";

const token = localStorage.getItem("token");
let user = localStorage.getItem("user");

user && (user = JSON.parse(user));

const initialSate = {
  isLoading: false,
  showAlert: false,
  showSidebar: true,
  alertText: "",
  alertType: "",
  linkActive: 1,

  // INFO
  infoUser: {},
  patientAccount: {},
  username: user?.username ?? null,
  email: user?.email ?? null,
  role: user?.role ?? null,
  token: token || null,

  // ALL PATIENTS
  waiting: [],
  myPatients: [],
  totalPatients: 0,
  page: 1,
  numberOfPatientPages: 1,
  waitingList: [],
  stats: {},

  // QUERY
  search: "",
  levelDis: "all",
  gender: "all",
  sort: "a-z",

  // CACHING
  localCache: {},

  // Appointment
  appointment: [
    {
      name: "Adam",
      date: {
        when: "Tomorrow",
        day: "Thu, 02/07/2023",
        hour: "11:30 AM",
      },
    },
    {
      name: "Ema",
      date: {
        when: "Tomorrow",
        day: "Thu, 02/07/2023",
        hour: "15:30 AM",
      },
    },
  ],
  scheduler: 2,

  // ARTICLES
  detail: {},
  articles: {
    myFavorite: [],
    allArticles: [
      {
        img: "https://vinmec-prod.s3.amazonaws.com/images/20190717_053230_352495_20190619_175032_844.max-1800x1800.jpg",
        subImg:
          "https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg",
        title: "Thoái hóa khớp",
        calendar: "18/05/2023",
        name: "BS Nguyen Van An",
        like: false,
        p1: "Theo giải phẫu, cấu tạo phần khung xương của người được hình thành từ nhiều loại xương và khớp. Trong đó có 3 thể khớp là khớp động (tay, chân) - khớp bán động (cột sống) - khớp bất động (hộp sọ). Do đặc trưng vận động, sự ảnh hưởng của áp lực sinh ra khi chúng ta vận động, di chuyển, lao động… mà khớp động và khớp bán động thường bước vào giai đoạn lão hóa, suy yếu nhanh hơn. Tình trạng này có thể có mối liên hệ trực tiếp đến yếu tố tuổi tác hoặc không nhưng nó sẽ gây ra các cơn đau nhức xương khớp với các cấp độ khác nhau.",
        p2: "Thoái hóa khớp là bệnh lý hàng đầu gây ra các cơn đau nhức ở nhiều cấp độ khác nhau. Đây là bệnh lý đặc trưng bởi việc sụn khớp và xương dưới sụn bị tổn thương, bào mòn. Đặc điểm của cơn đau gây ra do bệnh thoái hóa khớp là thường có cường độ đau tăng mỗi khi người bệnh vận động, cơn đau giảm nếu được nghỉ ngơi; cơn đau nghiêm trọng nhất là những hôm trời lạnh, những hôm thời tiết thay đổi đột ngột; có biểu hiện cứng khớp và đau nhức xương khớp vào buổi sáng sau khi ngủ dậy. Cường độ cơn đau có thể là dai dẳng âm ỉ hoặc cũng có thể đau dữ dội cấp tính. Nếu các tổn thương sụn khớp không được khắc phục sớm thì có thể gây hạn chế vận động, làm khớp biến dạng (do bị bào mòn và người bệnh có tư thế giảm đau), đe dọa nguy cơ tàn phế.",
        p3: "Nhiều người nghĩ rằng bệnh thoát vị đĩa đệm chỉ gặp phải khi lớn tuổi, xảy ra do quá trình lão hóa tự nhiên. Tuy nhiên thời gian gần đây, tỷ lệ người trẻ tuổi mắc thoát vị đĩa đệm ngày càng gia tăng. Tình trạng thoái hóa đĩa đệm, rách hoặc nứt gây chèn ép dây thần kinh, dẫn đến cơn đau khó chịu, gây cản trở khả năng vận động. Nếu không phát hiện sớm và điều trị thoát vị đĩa đệm kịp thời, có thể khiến một người khỏe mạnh bị tàn phế suốt đời.",
      },
      {
        img: "https://vinmec-prod.s3.amazonaws.com/images/20190823_031048_425051_20190308_081606_270.max-1800x1800.jpg",
        subImg:
          "https://www.victoriavn.com/images/Suong_-_Tim_bac_si/BC_AN.png",
        title: "Lười ăn ở trẻ em",
        calendar: "20/05/2023",
        name: "BS Nguyen Thi Loan",
        like: false,
        p1: "Biếng ăn sẽ khiến trẻ chậm tăng cân. Trung bình trẻ từ 12 tháng tuổi trở lên sẽ tăng khoảng 100 – 200g/tháng. Nếu không can thiệp kịp thời thì trẻ biếng ăn có thể bị suy dinh dưỡng từ nhẹ tới nặng. Sức đề kháng ở trẻ suy dinh dưỡng giảm, làm bé dễ mắc bệnh và khi đó trẻ càng biếng ăn hơn.",
        p2: "Nếu trẻ bị suy dinh dưỡng nặng, kéo dài có thể ảnh hưởng xấu tới sự phát triển chiều cao sau này. Trẻ biếng ăn có nguy cơ cao bị suy dinh dưỡng thể còi cọc với tầm vóc thấp bé và quá trình phục hồi dinh dưỡng sẽ khó khăn, kéo dài hơn so với trẻ bị chán ăn thể nhẹ. Biếng ăn là vấn đề phức tạp do nhiều nguyên nhân gây ra và ảnh hưởng trực tiếp tới thể trạng, sức khỏe của trẻ. Phụ huynh nên xác định và khắc phục những nguyên nhân gây biếng ăn ở trẻ, đồng thời phối hợp nhiều biện pháp điều trị biếng ăn dưới sự tư vấn của bác sĩ chuyên khoa.",
        p3: "Nếu tình trạng trẻ biếng ăn kéo dài, cha mẹ nên bổ sung cho trẻ các sản phẩm hỗ trợ có chứa lysine, các vi khoáng chất và vitamin thiết yếu như kẽm, crom, selen, vitamin nhóm B giúp đáp ứng đầy đủ nhu cầu về dưỡng chất ở trẻ. Đồng thời, các vitamin thiết yếu này còn hỗ trợ tiêu hóa, tăng cường khả năng hấp thu dưỡng chất, giúp cải thiện tình trạng biếng ăn, giúp trẻ ăn ngon miệng. Cha mẹ có thể cũng có thể áp dụng việc bổ sung chất qua đường ăn uống và các thực phẩm chức năng có nguồn gốc từ tự nhiên để bé dễ hấp thụ.",
      },
      {
        img: "https://binhdanhospital.vn/wp-content/uploads/2020/03/covid-19-con-co-kha-nang-dot-bien.jpg",
        subImg:
          "https://taimuihongsg.com/wp-content/uploads/2018/05/Kim-Bun-ThuongE_taimuihongsg.jpg",
        title: "Covid-19 hiện nay",
        calendar: "28/05/2023",
        name: "BS Nguyen Van Tam",
        like: false,
        p1: "Theo ghi nhận, trong tháng 4 tình hình dịch bệnh COVID-19 tại Quận 1 có dấu hiệu tăng nhẹ trở lại. Tính đến ngày 23/04/2023 toàn Quận ghi nhận 51 ca mắc mới, chỉ tháng 4 đã có 48 ca mắc, chủ yếu đều là những trường hợp không triệu chứng hoặc có triệu chứng nhẹ.",
        p2: "Ngoài ra, khi tham gia các hoạt động xã hội, lao động sản xuất, học tập…. những người sống chung nhà có thể mang mầm bệnh về lây nhiễm cho những người thân thuộc nhóm người có nguy cơ. Vì vậy, để bảo vệ người thân của mình – là người thuộc nhóm nguy cơ, ý thức phòng bệnh của người thân, người chăm sóc cùng sống chung trong nhà cũng rất quan trọng. Lưu ý: Khi có triệu chứng nghi ngờ bệnh, hãy đến cơ sở y tế gần nhất để được hướng dẫn chẩn đoán điều trị kịp thời, hạn chế biến chứng nặng và tử vong. Người dân cần tuân thủ chặt chẽ các khuyến cáo phòng, chống dịch COVID-19, không quá hoang mang lo lắng, nhưng cũng không lơ là chủ quan, tuân thủ chặt chẽ các khuyến cáo phòng, chống dịch COVID-19, có ý thức trách nhiệm bảo vệ sức khoẻ cho bản thân, gia đình và cộng đồng. Đặc biệt trong thời gian sắp tới, khi cả nước sẽ bước vào kỳ lễ hội dài ngày cuối tháng 4. Thông điệp 2K (Khẩu trang - Khử khuẩn) + Vaccin vẫn là biện pháp phòng chống dịch Covid-19 quan trọng, bên cạnh Thuốc + Điều trị + Ý thức người dân và các biện pháp khác.",
        p3: "Đeo khẩu trang theo đúng hướng dẫn của Bộ Y tế: Khi sử dụng phương tiện giao thông công cộng, khi đến các nơi công cộng, các cơ sở khám chữa bệnh, trong không gian kín và các địa điểm bắt buộc).",
      },
      {
        img: "https://images2.thanhnien.vn/Uploaded/hongquan-qc/2022_08_11/4-2920.png",
        subImg:
          "https://images2.thanhnien.vn/528068263637045248/2023/7/19/bac-si-1689742821315885731155.png",
        title: "Chăm sóc người lớn tuổi",
        calendar: "18/06/2023",
        name: "BS Nguyen Thi An",
        like: false,
        p1: "Một trong những yếu tố quan trọng của việc lựa chọn môn thể thao là môn đó phải có tính thuận lợi cho chính người tập. Cần tính tới việc mình có thể tham gia tập luyện với tần suất bao nhiêu buổi trong tuần và có ảnh hưởng tới các thói quen hay công việc khác không? Cần bắt đầu với việc lựa chọn thời gian phù hợp trong ngày cho việc tập luyện để duy trì việc đó một cách thường xuyên.",
        p2: "Khi rèn luyện thân thể cần lưu ý rằng bất cứ một bài tập nào cũng bao gồm các yếu tố sau: Tần số động tác, cường độ vận động và thời gian tập luyện. Để đạt hiệu quả mong muốn cần đảm bảo các yếu tố trên phải được tái lặp đồng đều, tăng giảm phù hợp với chính bản thân mình và trong từng giai đoạn nhất định. Cần lưu ý, khi không cảm nhận được sự thoải mái sau mỗi buổi tập hoặc thậm chí thấy có các vấn đề làm chúng ta bất an, tốt nhất hãy khám và tư vấn tại phòng khám y học thể thao hoặc tại bệnh viện.",
        p3: "Ngoài việc vận động thân thể, người cao tuổi còn cần vận động trí óc để tránh lão hóa lão sớm. Các cụ nên đọc sách, chơi cờ, xem tivi chương trình giải trí, khoa học… vào thời gian rảnh rỗi. Thậm chí là nên học cách sử dụng internet, kết bạn facebook… Khi bộ não phải hoạt động thường xuyên, nó sẽ tránh được những bệnh về nhận thức hoặc mất trí nhớ sớm.",
      },
    ],
  },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  const authFetch = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
  };

  const registerUser = async (info) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        info
      );
      const { token, user } = res.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      addToLocalStorage(user, token);
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

  const addToLocalStorage = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const loginUser = async (info) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        info
      );
      const { token, user, infoUser } = res.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, infoUser },
      });
      addToLocalStorage(user, token);
    } catch (err) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeLocalStorage();
  };

  const updateUser = async (info) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", info);
      console.log(data);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
      console.log(err);
    }
    clearAlert();
  };

  const addPatient = async (info) => {
    const newInfo = { ...info, emailDoctor: state.email };
    dispatch({ type: ADD_NEW_PATIENT_BEGIN });
    try {
      const { data } = await authFetch.post("/doctors", newInfo);
      console.log(data);
      dispatch({ type: ADD_NEW_PATIENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_NEW_PATIENT_ERROR,
        payload: { msg: "Email is already used!" },
      });
      console.log(error);
    }
    clearAlert();
  };

  const changeParams = (params) => {
    console.log(params);
    dispatch({ type: CHANGE_PARAM, payload: { params } });
  };

  const getAllPatients = async (params) => {
    const { search, levelDis, gender, sort } = params ?? state;
    if (params) {
      dispatch({ type: CHANGE_PAGE, payload: { page: 1 } });
    }

    let url = `/doctors?page=${state.page}&levelDis=${levelDis}&gender=${gender}&sort=${sort}`;

    if (search) {
      url += `&search=${search}`;
    }

    dispatch({ type: GET_MY_PATIENTS_BEGIN });

    const queryString = `${state.page}-${search}-${levelDis}-${gender}-${sort}`;

    try {
      // if (state.localCache[queryString]) {
      //   const { myPatients, totalPatients, numberOfPatientPages } =
      //     state.localCache[queryString];
      //   dispatch({
      //     type: GET_MY_PATIENTS_SUCCESS,
      //     payload: {
      //       myPatients,
      //       totalPatients,
      //       numberOfPatientPages,
      //     },
      //   });
      // } else {
      const { data } = await authFetch.get(url);
      const { myPatients, totalPatients, numberOfPatientPages } = data;
      state.localCache[queryString] = data;
      dispatch({
        type: GET_MY_PATIENTS_SUCCESS,
        payload: {
          myPatients,
          totalPatients,
          numberOfPatientPages,
        },
      });
      // }
    } catch (error) {
      console.log(error.response);
    }
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const deleteMyPatient = async (id, type) => {
    try {
      if (type === "decline" || type === "accept") {
        const newList = state.waitingList.filter((el) => el._id !== id);
        dispatch({ type: DECLINE_MY_PATIENT, payload: newList });
        if (type === "decline") {
          const { data } = await authFetch.delete(`/doctors/decline/${id}`);
          console.log(data);
        } else {
          const { data } = await authFetch.delete(`/doctors/accept/${id}`);
          console.log(data);
        }
      } else {
        const newList = state.myPatients.filter((el) => el._id !== id);
        dispatch({ type: DELETE_MY_PATIENT, payload: newList });
        const { data } = await authFetch.delete(`/doctors/delete/${id}`);
        console.log(data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getWaitingList = async () => {
    try {
      const { data } = await authFetch.get("doctors/waiting-list");
      dispatch({ type: GET_WAITING_LIST, payload: data.myPatients });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getStats = async () => {
    try {
      const { data } = await authFetch.get("doctors/get-stats");
      dispatch({ type: GET_STATS, payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const changeActive = (active) => {
    dispatch({ type: CHANGE_ACTIVE, payload: { active } });
  };

  const changeAppointment = (initApp, app) => {
    dispatch({ type: CHANGE_APPOINTMENT, payload: { initApp, app } });
  };

  const changeLikeArticle = (article, like) => {
    dispatch({ type: CHANGE_LIKE_ARTICLE, payload: { article, like } });
  };

  const detailArticle = (title) => {
    dispatch({ type: DETAIL_ARTICLE, payload: { title } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        deleteMyPatient,
        addPatient,
        getAllPatients,
        getWaitingList,
        getStats,
        changePage,
        changeParams,
        changeActive,
        changeAppointment,
        changeLikeArticle,
        detailArticle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialSate, useAppContext };
