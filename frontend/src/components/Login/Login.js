import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { useReducer } from "react";
import {
  Alert,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Button,
} from "reactstrap";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isEmail from "validator/lib/isEmail";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const ref_container = useRef();
  useEffect(() => {
    const scrollDiv = document.getElementById("loginDiv").offsetTop;
    window.scrollTo({ top: scrollDiv + 600, behavior: "smooth" });
    console.log(process.env.REACT_APP_BASE_URL)
  }, []);
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatchToast({
      color: "primary",
      message: "Please wait while your request is being processed.",
    });

    if (!username.valid || !password.valid) {
      dispatchToast({
        color: "danger",
        message: "Please fill out all the fields correctly",
      });
      return;
    }

    let baseUrl = process.env.REACT_APP_BASE_URL;
    console.log(baseUrl)
    if (baseUrl.substring(baseUrl.length - 1) !== "/") baseUrl += "/";
    axios
      .post(`${baseUrl}auth/login/`, {
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        if (res.data.role !== "admin" && res.data.role !== "staff") {
          dispatchToast({
            color: "danger",
            message: "Please login with admin or staff account",
          });
          return;
        }
        localStorage.setItem("token", res.data.token);
        dispatchToast({
          color: "success",
          message: "Logged in Successfully! Redirecting...",
        });
        setToken(res.data.token);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(({ response }) => {
        dispatchToast({
          color: "danger",
          message: response.data[Object.keys(response.data)[0]].toString(),
        });
      });
  };

  const usernameReducer = (state, value) => {
    let warning = "";
    if (value === "") warning = "This field is required.";
    else if (value.includes("@")) {
      if (!isEmail(value)) warning = "Please enter a valid email address.";
    } else {
      if (value.length < 6 || value.length > 30)
        warning = "Username must be of length 6 - 30.";
      else if (!isAlphanumeric(value, undefined, { ignore: " ._-" }))
        warning = "Please use only alphabets, numbers or _, - and .";
    }
    return { value, warning, valid: warning === "" && value !== "" };
  };

  const passwordReducer = (state, value) => {
    let warning = "";
    if (value === "") warning = "This field is required.";
    else if (value.length < 6 || value.length > 30)
      warning = "Password must be of length 6 - 30.";
    return { value, warning, valid: warning === "" && value !== "" };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [username, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    warning: "",
    valid: false,
  });

  const [password, dispatchpassword] = useReducer(passwordReducer, {
    value: "",
    warning: "",
    valid: false,
  });

  const [toast, dispatchToast] = useReducer(toastReducer, {
    color: "primary",
    message: "",
  });

  return (
    <div id="loginDiv" className={`${styles.loginDiv}`} ref={ref_container}>
      <h3 className={`${styles.heading}`}> Spardha : Admin dashboard </h3>

      <Form className={`${styles["form-horizontal"]}`}>
        <div
          className="col-sm-12 justify-content-center fw-bold d-flex flex-column"
          style={{ marginTop: "12px" }}
        >
          <div className={`${styles.panel}`}>
            <div className={`${styles["panel-heading"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
              >
                <path
                  d="M27.4244 13.3267C27.4244 13.6345 27.4039 13.9423 27.3661 14.2466C27.3833 14.1242 27.4004 13.9983 27.4141 13.8758C27.3318 14.4844 27.174 15.0755 26.9441 15.6421C26.9887 15.5302 27.0367 15.4183 27.0813 15.3063C26.8514 15.859 26.5564 16.3766 26.1961 16.8523C26.2682 16.7578 26.3402 16.6634 26.4123 16.569C26.0555 17.0376 25.6403 17.4608 25.1805 17.8246C25.2732 17.7511 25.3658 17.6777 25.4584 17.6042C24.9918 17.968 24.484 18.2723 23.9419 18.5066C24.0517 18.4611 24.1615 18.4122 24.2713 18.3667C23.7155 18.601 23.1356 18.7619 22.5386 18.8459C22.6587 18.8284 22.7822 18.8109 22.9023 18.7969C22.3019 18.8773 21.698 18.8773 21.0976 18.7969C21.2177 18.8144 21.3412 18.8319 21.4613 18.8459C20.8643 18.7619 20.2844 18.601 19.7286 18.3667C19.8384 18.4122 19.9482 18.4611 20.058 18.5066C19.5159 18.2723 19.0081 17.9715 18.5415 17.6042C18.6341 17.6777 18.7267 17.7511 18.8194 17.8246C18.3596 17.4608 17.9445 17.0376 17.5876 16.569C17.6597 16.6634 17.7317 16.7578 17.8038 16.8523C17.447 16.3766 17.1485 15.859 16.9186 15.3063C16.9632 15.4183 17.0112 15.5302 17.0558 15.6421C16.8259 15.0755 16.6681 14.4844 16.5858 13.8758C16.6029 13.9983 16.6201 14.1242 16.6338 14.2466C16.5549 13.6345 16.5549 13.0189 16.6338 12.4069C16.6166 12.5293 16.5995 12.6552 16.5858 12.7776C16.6681 12.169 16.8259 11.578 17.0558 11.0114C17.0112 11.1233 16.9632 11.2352 16.9186 11.3471C17.1485 10.7945 17.4435 10.2769 17.8038 9.8012C17.7317 9.89563 17.6597 9.99007 17.5876 10.0845C17.9445 9.61583 18.3596 9.19263 18.8194 8.82888C18.7267 8.90233 18.6341 8.97578 18.5415 9.04923C19.0081 8.68548 19.5159 8.38119 20.058 8.14686C19.9482 8.19233 19.8384 8.24129 19.7286 8.28676C20.2844 8.05242 20.8643 7.89154 21.4613 7.8076C21.3412 7.82508 21.2177 7.84257 21.0976 7.85656C21.698 7.77612 22.3019 7.77612 22.9023 7.85656C22.7822 7.83907 22.6587 7.82159 22.5386 7.8076C23.1356 7.89154 23.7155 8.05242 24.2713 8.28676C24.1615 8.24129 24.0517 8.19233 23.9419 8.14686C24.484 8.38119 24.9918 8.68198 25.4584 9.04923C25.3658 8.97578 25.2732 8.90233 25.1805 8.82888C25.6403 9.19263 26.0555 9.61583 26.4123 10.0845C26.3402 9.99007 26.2682 9.89563 26.1961 9.8012C26.553 10.2769 26.8514 10.7945 27.0813 11.3471C27.0367 11.2352 26.9887 11.1233 26.9441 11.0114C27.174 11.578 27.3318 12.169 27.4141 12.7776C27.397 12.6552 27.3798 12.5293 27.3661 12.4069C27.4039 12.7112 27.421 13.0189 27.4244 13.3267C27.4279 14.0577 28.0523 14.7607 28.7969 14.7257C29.538 14.6908 30.1727 14.1102 30.1693 13.3267C30.1624 11.6514 29.6683 9.9376 28.7008 8.57356C28.44 8.20632 28.1621 7.84607 27.8533 7.5208C27.5411 7.19203 27.198 6.90873 26.8412 6.63242C26.1927 6.12877 25.4687 5.75803 24.7002 5.47123C21.602 4.31354 17.8655 5.34532 15.7692 7.9475C15.481 8.30425 15.2065 8.67499 14.9732 9.07371C14.7399 9.46893 14.558 9.88864 14.3899 10.3153C14.0742 11.1058 13.913 11.9452 13.8478 12.7951C13.7208 14.4599 14.1463 16.1982 14.9972 17.6252C15.8172 19.0033 17.0558 20.1854 18.5037 20.8535C18.9292 21.0493 19.3649 21.2312 19.8178 21.3606C20.2673 21.4865 20.7236 21.5565 21.1868 21.6124C22.0308 21.7139 22.892 21.6439 23.7258 21.4725C26.8926 20.815 29.5448 18.0344 30.0355 14.7712C30.1075 14.2956 30.1624 13.8199 30.1624 13.3372C30.1658 12.6062 29.5277 11.9032 28.79 11.9382C28.0489 11.9627 27.4244 12.5433 27.4244 13.3267ZM31.9774 35.1969C31.3049 35.1969 30.6325 35.1969 29.96 35.1969C28.3577 35.1969 26.7588 35.1969 25.1565 35.1969C23.2283 35.1969 21.3 35.1969 19.3683 35.1969C17.7043 35.1969 16.0402 35.1969 14.3727 35.1969C13.5939 35.1969 12.8151 35.2039 12.0362 35.1969C11.9504 35.1969 11.8647 35.1899 11.7823 35.1794C11.9024 35.1969 12.0259 35.2144 12.146 35.2284C12.0088 35.2074 11.8784 35.1689 11.7514 35.1165C11.8612 35.1619 11.971 35.2109 12.0808 35.2564C11.9436 35.1969 11.8166 35.12 11.6965 35.0255C11.7892 35.099 11.8818 35.1724 11.9744 35.2459C11.8715 35.1584 11.7754 35.064 11.6931 34.9591C11.7652 35.0535 11.8372 35.1479 11.9093 35.2424C11.8166 35.12 11.7446 34.9906 11.6828 34.8507C11.7274 34.9626 11.7754 35.0745 11.82 35.1864C11.7686 35.057 11.7343 34.9206 11.7103 34.7842C11.7274 34.9066 11.7446 35.0325 11.7583 35.1549C11.7034 34.7317 11.7411 34.284 11.7411 33.8573C11.7411 33.3572 11.7411 32.8605 11.7411 32.3604C11.7411 31.9862 11.7617 31.6154 11.8098 31.2447C11.7926 31.3671 11.7754 31.493 11.7617 31.6154C11.8578 30.8984 12.0431 30.1954 12.321 29.5274C12.2764 29.6393 12.2283 29.7512 12.1837 29.8631C12.4514 29.2266 12.7945 28.6285 13.2096 28.0794C13.1376 28.1738 13.0655 28.2683 12.9935 28.3627C13.4086 27.8206 13.8855 27.3309 14.4208 26.9077C14.3281 26.9812 14.2355 27.0546 14.1429 27.1281C14.6815 26.7049 15.2682 26.3551 15.8927 26.0823C15.7829 26.1278 15.6731 26.1767 15.5633 26.2222C16.2186 25.9424 16.9049 25.75 17.6117 25.6521C17.4916 25.6696 17.368 25.6871 17.248 25.7011C17.7558 25.6346 18.2601 25.6311 18.7713 25.6311C19.3992 25.6311 20.0271 25.6311 20.655 25.6311C22.12 25.6311 23.5851 25.6311 25.0502 25.6311C25.6163 25.6311 26.179 25.6276 26.7451 25.7011C26.625 25.6836 26.5015 25.6661 26.3814 25.6521C27.0848 25.75 27.7744 25.9389 28.4297 26.2222C28.3199 26.1767 28.2101 26.1278 28.1004 26.0823C28.7248 26.3551 29.3115 26.7049 29.8502 27.1281C29.7575 27.0546 29.6649 26.9812 29.5723 26.9077C30.1041 27.3309 30.5844 27.8171 30.9996 28.3627C30.9275 28.2683 30.8555 28.1738 30.7834 28.0794C31.1986 28.6285 31.5417 29.2266 31.8093 29.8631C31.7647 29.7512 31.7167 29.6393 31.6721 29.5274C31.9466 30.1954 32.1353 30.8949 32.2313 31.6154C32.2142 31.493 32.197 31.3671 32.1833 31.2447C32.2485 31.7728 32.2519 32.2974 32.2519 32.8291C32.2519 33.4062 32.2519 33.9833 32.2519 34.5604C32.2519 34.7597 32.2588 34.9591 32.2348 35.1549C32.2519 35.0325 32.2691 34.9066 32.2828 34.7842C32.2622 34.9241 32.2245 35.057 32.173 35.1864C32.2176 35.0745 32.2656 34.9626 32.3102 34.8507C32.2519 34.9906 32.1764 35.12 32.0838 35.2424C32.1558 35.1479 32.2279 35.0535 32.2999 34.9591C32.2142 35.064 32.1215 35.1619 32.0186 35.2459C32.1112 35.1724 32.2039 35.099 32.2965 35.0255C32.1764 35.12 32.0495 35.1934 31.9122 35.2564C32.022 35.2109 32.1318 35.1619 32.2416 35.1165C32.1147 35.1689 31.9809 35.2039 31.8471 35.2284C31.9671 35.2109 32.0907 35.1934 32.2107 35.1794C32.1353 35.1899 32.0563 35.1934 31.9774 35.1969C31.624 35.2004 31.2603 35.3508 31.0064 35.6061C30.7697 35.8475 30.5879 36.2462 30.605 36.5959C30.6393 37.3444 31.2089 38.0054 31.9774 37.9949C33.3121 37.974 34.4855 37.0856 34.8767 35.781C35.0311 35.2634 34.9967 34.7073 34.9967 34.1756C34.9967 32.9585 35.0345 31.7518 34.8286 30.5452C34.5267 28.7789 33.6552 27.1176 32.4612 25.813C31.2672 24.5084 29.6615 23.5501 27.9631 23.1234C26.9887 22.8785 26.0074 22.8401 25.0124 22.8401C23.99 22.8401 22.9709 22.8401 21.9485 22.8401C20.9398 22.8401 19.9345 22.8401 18.9257 22.8401C17.9067 22.8401 16.8946 22.889 15.903 23.1583C14.2183 23.613 12.6332 24.5818 11.4632 25.8969C10.2829 27.2225 9.42861 28.8873 9.1507 30.6641C8.96542 31.8567 9.00316 33.0529 9.00316 34.2561C9.00316 34.8087 8.97228 35.3858 9.16785 35.9139C9.42175 36.5924 9.82661 37.1276 10.4202 37.5298C10.8834 37.8411 11.4701 37.9915 12.0191 37.9984C12.2867 38.0019 12.5543 37.9984 12.8219 37.9984C13.5081 37.9984 14.1909 37.9984 14.8771 37.9984C15.8515 37.9984 16.8225 37.9984 17.7969 37.9984C18.9292 37.9984 20.0614 37.9984 21.1937 37.9984C22.3568 37.9984 23.5165 37.9984 24.6796 37.9984C25.7432 37.9984 26.8034 37.9984 27.867 37.9984C28.7008 37.9984 29.5345 37.9984 30.3648 37.9984C30.8418 37.9984 31.3187 37.9984 31.7956 37.9984C31.8573 37.9984 31.9191 37.9984 31.9809 37.9984C32.698 37.9984 33.3876 37.3549 33.3533 36.5994C33.319 35.837 32.7494 35.1969 31.9774 35.1969Z"
                  fill="white"
                />
              </svg>
              <h4 className={`${styles["panel-title"]} text-center`}>
                Login Details
              </h4>
            </div>

            <FormGroup className={`${styles["form-group"]}`}>
              <div className="col-sm-12">
                <FormGroup className={`${styles["form-group"]}`}>
                  <Label for="username" className={`${styles.label}`}>
                    Username/Email:&nbsp;
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <InputGroup className={`${styles["input-group"]}`}>
                    <Input
                      name="username"
                      id="username"
                      type="text"
                      value={username.value}
                      valid={username.warning === "" && username.value !== ""}
                      invalid={username.warning !== ""}
                      onChange={(e) => {
                        dispatchUsername(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles["form-control"]}`}
                      required
                    ></Input>
                  </InputGroup>
                  {username.warning !== "" && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {username.warning}
                    </FormFeedback>
                  )}
                </FormGroup>
              </div>

              <div className="col-sm-12">
                <FormGroup className={`${styles["form-group"]}`}>
                  <Label for="password" className={`${styles.label}`}>
                    Password:&nbsp;
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <InputGroup className={`${styles["input-group"]}`}>
                    <Input
                      name="password"
                      id="password"
                      type="password"
                    //   placeholder="Enter the Password"
                      value={password.value}
                      valid={password.warning === "" && password.value !== ""}
                      invalid={password.warning !== ""}
                      onChange={(e) => {
                        dispatchpassword(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles["form-control"]}`}
                      required
                    ></Input>
                  </InputGroup>
                  {password.warning !== "" && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {password.warning}
                    </FormFeedback>
                  )}
                </FormGroup>
              </div>
            </FormGroup>
          </div>
          {toast.message !== "" && (
            <Alert
              color={toast.color}
              style={{
                fontSize: "15px",
                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
              }}
              className="my-1 py-2"
            >
              {toast.message}
            </Alert>
          )}
          <div className={`${styles.footer}`}>
            <Button
              color="success"
              className={`${styles["btn-block"]}`}
              onClick={submitHandler}
              type="submit"
            >
              {/* <FaPaperPlane
							color="white"
							className="me-1"
						></FaPaperPlane> */}
              LOGIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
				className={`${styles.offHover}`}
              >
                <path
                  d="M0.001228 0L0.537774 2.19947L2.91847 12.5L0.536546 22.8005L0 25L2.1867 24.1578L29.1982 13.6003L32 12.5L29.1994 11.3997L2.18793 0.842248L0.001228 0ZM3.41572 3.88514L22.4846 11.327H5.142L3.41572 3.88514ZM5.142 13.673H22.4846L3.41572 21.1149L5.142 13.673Z"
                  fill="#4D44B5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
				className={`${styles.onHover}`}
              >
                <path
                  d="M0.001228 0L0.537774 2.19947L2.91847 12.5L0.536546 22.8005L0 25L2.1867 24.1578L29.1982 13.6003L32 12.5L29.1994 11.3997L2.18793 0.842248L0.001228 0ZM3.41572 3.88514L22.4846 11.327H5.142L3.41572 3.88514ZM5.142 13.673H22.4846L3.41572 21.1149L5.142 13.673Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;