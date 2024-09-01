

// const InterceptedAboutPage = () => {
//     return (
//       <div>(...) Intercepted About Page</div>
//     )
//   }
  
//   export default InterceptedAboutPage

const InterceptedAboutPage = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Intercepted About Page</h1>
          <p className="text-gray-400">
            This is the Intercepted About Page.
          </p>
        </div>
      </div>
    );
  };
  
  export default InterceptedAboutPage;
  