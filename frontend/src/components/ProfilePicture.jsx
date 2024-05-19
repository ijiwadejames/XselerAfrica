/** @format */

const ProfilePicture = ({ avatar, radius, borderBottom, borderTop }) => {
  const profilePic = (
    <img
      src={avatar}
      style={{
        borderRadius: radius,
        borderBottom: borderBottom,
        borderTop: borderTop,
      }}
      className="img-fluid shadow-sm"
      alt="avatar"
    />
  );
  return profilePic;
};

export default ProfilePicture;
