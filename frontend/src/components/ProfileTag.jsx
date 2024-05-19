/** @format */
import ProfilePicture from "./ProfilePicture";
import { useDataContext } from "../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileTag = ({ mainUserTag }) => {
  const { users } = useDataContext();

  return (
    <>
      {mainUserTag ? (
        <div className="mainUserTag">
          <div className="profileContainer bg-color mt-2">
            <div className="img-box">
              <ProfilePicture avatar={users.avatar} />
            </div>
            <div className="text-box">
              <div className="textHolder">
                Welcome, <br />
                <FontAwesomeIcon icon={faUser} />{" "}
                {users.fname + " " + users.sname}
              </div>
              <div className="textHolder">
                <FontAwesomeIcon icon={faEnvelope} /> {users.email}
              </div>
              <div className="textHolder">
                <FontAwesomeIcon icon={faPhone} /> {users.pnum}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobileUserTag">
          <div className="profileContainer col-12 bg-color mt-1">
            <div className="img-box">
              <ProfilePicture avatar={users.avatar} />
            </div>
            <div className="text-box">
              <div className="textHolder">
                Welcome, <br />
                <FontAwesomeIcon icon={faUser} />{" "}
                {users.fname + " " + users.sname}
              </div>
              <div className="textHolder">
                <FontAwesomeIcon icon={faEnvelope} /> {users.email}
              </div>
              <div className="textHolder">
                <FontAwesomeIcon icon={faPhone} /> {users.pnum}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileTag;
