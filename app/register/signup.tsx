"use client";
type Props = {
  openSignin: () => void;
    changeRightSection?: (section: 'signin' | 'signup') => void;
};
export default function Signup({ openSignin }: Props) {
  
  return (
    <>
      <div className="flex items-start justify-start flex-col w-[300px] md:[380px]">
        <h1 className="register-header">Sign Up</h1>
         <p>
          Already have an account{" "}
          <span onClick={openSignin} className="text-light-primary">
          sign in
          </span>
        </p>
      </div>
    </>
  );
}
