const NewsletterSubscribe = ({ onSubmit, loading }) => {
    return (
      <>
        <h3 className="text-xl font-semibold mb-5">
          Cleaning Tips & Tricks
        </h3>
  
        <p className="text-white/70 mb-5">
          Subscribe to our newsletter for the latest cleaning tips, tricks, and special offers.
        </p>
  
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="bg-white/10 border border-white/20 rounded-lg sm:rounded-r-none px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-300 placeholder:text-white/50"
          />
  
          <button
            type="submit"
            disabled={loading}
            className="bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-medium px-5 py-3 rounded-lg sm:rounded-l-none transition-colors"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </>
    );
  };
  
  export default NewsletterSubscribe;
  