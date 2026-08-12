import TextInput from "../atoms/TextInput";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../atoms/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Close from "/close.svg";
import { isDemoMode, showDemoUi } from "../../demo/mode";
import { DEMO_CREDENTIALS } from "../../mocks/demoData";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    return dispatch(loginThunk(data))
      .then(unwrapResult)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error?.error?.code === "1001") {
          if (error.error.message?.email) {
            setErrorMessage("유효하지 않은 이메일입니다.");
          } else if (error.error.message?.password) {
            setErrorMessage(
              "비밀번호는 영소문자, 숫자, 특수문자를 포함해야합니다. 공백은 포함하지 않습니다",
            );
          }
        } else if (error?.error?.code === "1201") {
          setErrorMessage("잘못된 비밀번호입니다.");
        } else if (error?.error?.code === "1301") {
          setErrorMessage("존재하지 않는 이메일입니다.");
        } else {
          setErrorMessage("로그인에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        }
      });
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  return (
    <div className="relative flex flex-col justify-center h-screen p-4">
      <Button
        className="absolute left-4 top-4"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Close} alt="닫기 버튼" />
      </Button>
      <div className="grid gap-16">
        <h1 className="text-2xl font-bold text-center">로그인</h1>
        <form
          noValidate
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && (
            <small className="text-red-500" role="alert">
              {errors.email.message}
            </small>
          )}
          <TextInput
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자 이상 입력해주세요.",
              },
              maxLength: {
                value: 20,
                message: "20자 이하로 입력해주세요.",
              },
            })}
          />
          {errors.password && (
            <small className="text-red-500" role="alert">
              {errors.password.message}
            </small>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="long"
            className="rounded-lg"
          >
            로그인
          </Button>
          {__DEMO_BUILD__ && showDemoUi && (
            <div className="grid gap-2 p-3 text-sm border border-yellow-300 rounded-lg bg-yellow-50">
              <div>
                <strong>Portfolio Demo</strong>
                <br />
                실제 계정이나 결제 정보가 필요하지 않습니다.
              </div>
              <Button
                variant="long"
                className="rounded-lg"
                onClick={() => {
                  setValue("email", DEMO_CREDENTIALS.email, {
                    shouldValidate: true,
                  });
                  setValue("password", DEMO_CREDENTIALS.password, {
                    shouldValidate: true,
                  });
                }}
              >
                데모 계정 입력
              </Button>
              <small>
                {DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}
              </small>
            </div>
          )}
          {errorMessage && (
            <small className="text-red-500" role="alert">
              {errorMessage}
            </small>
          )}
          {!isDemoMode && (
            <Link
              to="/signup"
              className="w-full p-4 font-semibold text-center text-gray-700 bg-white h-14 rounded-xl active:filter active:brightness-75"
            >
              회원가입
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
