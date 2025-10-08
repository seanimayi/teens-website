"use client";
import { motion, AnimatePresence } from "framer-motion";
import Signin from "./signin";
import Signup from "./signup";
import SignRightSection from "./signrightsection";

import { useState } from "react";

export default function RegisterPage() {
  const [showSignin, setShowSignin] = useState<boolean>(true);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSigninContent, setShowSigninContent] = useState<boolean>(true);
  const [showSignupContent, setShowSignupContent] = useState<boolean>(false);

  const openSignUps = () => {
    setShowSignin(false);
    setShowSignUp(true);
    setShowSignupContent(true);
    setShowSigninContent(false);
  };

  const openSignIn = () => {
    setShowSignUp(false);
    setShowSignin(true);
    setShowSignupContent(false);
    setShowSigninContent(true);
  };

  // Handler to allow Signin to change right section
  const handleRightSectionChange = (section: 'signin' | 'signup') => {
    if (section === 'signin') {
      setShowSigninContent(true);
      setShowSignupContent(false);
    } else {
      setShowSigninContent(false);
      setShowSignupContent(true);
    }
  };
  return (
    <>
      <div className="md:grid grid-cols-[40%,_60%] min-h-screen">
        {/* right page */}
        <motion.div
          key="register-right-page"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="h-full bg-light-textPrimary "
        >
          <SignRightSection 
            openSignup={openSignUps} 
            openSignin={openSignIn}
            showSigninContent={showSigninContent}
            showSignupContent={showSignupContent}
          />
        </motion.div>
        <div className="h-full bg-light-background flex justify-center items-center flex-col">
          {/*form */}
          <AnimatePresence mode="wait">
            {showSignin && (
              <motion.div
                key="register-signin"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <Signin openSignup={openSignUps} changeRightSection={handleRightSectionChange}/>
              </motion.div>
            )}
            
            {/* ...existing code... */}
              {showSignUp && (<motion.div
                key="register-signup"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <Signup openSignin={openSignIn}/>
              </motion.div>)}
            
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
