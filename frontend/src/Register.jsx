import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4 py-10">
      {/* Box Register */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
        
        {/* Banner Hijau di Atas */}
        <div className="bg-emerald-500 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Registration</h2>
          <p className="text-emerald-50 mt-2 text-sm">Start tracking your meditation today</p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all"
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all"
                placeholder="Create a strong password"
              />
            </div>

            {/* Terms & Conditions */}
            {/* <div className="flex items-start">
              <input 
                type="checkbox" 
                className="mt-1 rounded text-emerald-500 focus:ring-emerald-400 h-4 w-4" 
                required
              />
              <p className="ml-2 text-xs text-gray-600 leading-tight">
                I agree to the <span className="text-emerald-600 font-bold cursor-pointer">Terms of Service</span> and <span className="text-emerald-600 font-bold cursor-pointer">Privacy Policy</span>.
              </p>
            </div> */}

            {/* Register Button */}
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all transform active:scale-[0.98] mt-4 cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Divider
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400 italic">Let's grow together</span>
            </div>
          </div> */}

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="ml-1 text-emerald-600 hover:underline font-bold transition-all">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;