import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4">
      {/* Box Login */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-emerald-100">
        
        {/* Header / Logo Section */}
        <div className="text-center mb-10">
          <div className="inline-block p-3 rounded-full bg-emerald-600 mb-4">
            {/* Icon Nature (Simple Leaf) */}
            <img src="./public/Logo.png" alt="medinow-logo" class="h-24 w-24"/>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-500 mt-2">Sign in to enjoy the nature vibe</p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="rounded text-emerald-500 focus:ring-emerald-400 mr-2" />
              Remember me
            </label>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg shadow-emerald-200 transition-all transform active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-8 text-sm text-gray-600">
          Don't have an account? 
          <Link to="/register" className="ml-1 text-emerald-600 hover:underline font-semibold">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;