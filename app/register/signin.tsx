"use client";
type Props = {
  openSignup: () => void;
  changeRightSection?: (section: 'signin' | 'signup') => void;
};
export default function Signin({ openSignup, changeRightSection }: Props) {
  const func = () => {
    openSignup();
    if (changeRightSection) {
      changeRightSection('signup');
    }
  }
  return (
    <>
      <div className="flex items-start justify-start flex-col w-[300px] md:[380px]">
        {" "}
        <h1 className="register-header">Sign in</h1>
        <p>
          Don't have an account{" "}
          <span onClick={func} className="text-light-primary">
            create account
          </span>
        </p>
      </div>
    </>
  );
}
