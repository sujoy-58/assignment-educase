import { useLocation } from "react-router-dom";
import cameraIcon from "../assets/camera.svg";

const Dashboard = () => {
  const location = useLocation();
  const { fullname, email } = location.state || {};
  console.log(fullname, email);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto shadow-lg rounded-xl">
        <div className="bg-white">
          <h1 className="text-[18px] pb-5 pt-2">Account Settings</h1>
        </div>

        <div className="flex gap-5 py-5">
          <div className="relative">
            <div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                alt="profile-photo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 p-1 rounded-full shadow">
              <img src={cameraIcon} alt="icon" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {/* @ts- */}
            <h1 className="text-[15px] font-medium">
              {fullname || "Marry Doe"}
            </h1>
            <p className="text-[14px] text-gray-500">
              {email || "Marry@Gmail.com"}
            </p>
          </div>
        </div>

        <p className="text-[14px] pb-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="border border-dashed border-gray-300 my-3"></div>
      </div>
    </div>
  );
};

export default Dashboard;
