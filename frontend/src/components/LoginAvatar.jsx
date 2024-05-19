/** @format */

import ProfilePicture from "./ProfilePicture";

const LoginAvatar = ({ avatar }) => {
  return (
    <div className="col-12 my-3 mt-4">
      <div className="col-5 m-auto">
        <ProfilePicture
          avatar={avatar}
          radius="50%"
          borderBottom="2px solid #023a76"
          borderTop="2px solid red"
        />
      </div>
    </div>
  );
};

export default LoginAvatar;
