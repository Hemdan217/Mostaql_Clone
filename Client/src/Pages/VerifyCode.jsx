import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { verifyOTPCode } from "../helpers/verifyAccount";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
function VerifyCode() {
  const { freelancerId } = useParams();
  const queryCode = useLocation().search.split("=")[1].slice(0,6);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("isAuth"));
    if (!freelancerId || !queryCode || !userData) {
      console.log('not')
    } else {
      verifyOTPCode(freelancerId, queryCode).then((data) => {
        setLoading(true);
        if (data.message) {
          setLoading(false);
          setError(false);
          Swal.fire({
            title: "Thank Your",
            text: "Your Account Has Been Verified",
            icon: "success",
          });
        } else {
          setLoading(false);
          setError(true);
        }
      });
    }
  }, []);
  return (
    <div className="container" style={{ minHeight: "75vh" }}>
      {loading && <LoadingSpinner />}
      {!error && !loading && (
        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiverr-res.cloudinary.com%2Fimages%2Ft_main1%2Cq_auto%2Cf_auto%2Fgigs%2F121237438%2Foriginal%2Fcd41dc43040b8869ccff6cc4df055f6a0ba05ab7%2Finstagram-verification-badge-blue-tick.png&f=1&nofb=1&ipt=ca25fbd95c41cd755e6e7279bb4f88d390d570463868608bfe0d9ffe2ec9383c&ipo=images"
            alt=""
            className="object-fit-contain w-25"
          />
          <h1>Your Account Has Been Verified</h1>
          <Link
            className="btn btn-outline-primary"
            to={`/profile/statistics/${freelancerId}`}
          >
            Thank You
          </Link>
        </div>
      )}
      {error && !loading && (
        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F89-895685_e-mail-wrong-flat-icon-clipart.png&f=1&nofb=1&ipt=f69fcf16961c7f6eee35e2642aa399bda9d16562568c1045d505a92defb8af99&ipo=images"
            alt=""
            className="object-fit-contain w-25"
          />
          <h1>Worng Code Your Account Has Not Verified Yet.</h1>
        </div>
      )}
    </div>
  );
}

export default VerifyCode;
