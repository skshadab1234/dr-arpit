import React from "react";

const InstagramHeader = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* User Info Section */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16">
            <a
              href="https://www.instagram.com/drarpitbansal.surgeon"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Finstagram.fbay1-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F344567781_614129347569150_298896586653383140_n.jpg"
                alt="Dr. Arpit Bansal"
                className="rounded-full border-2 border-blue-500"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/drarpitbansal.surgeon"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-lg flex items-center gap-2 font-bold text-gray-800 hover:text-blue-500"
            >
              Arpit Bansal{" "}
              <svg
                className="w-4 h-4 text-blue-500 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M5.79131 0.202079C5.90764 0.0894369 6.09236 0.0894369 6.20869 0.202079L7.15665 1.12C7.23117 1.19217 7.33769 1.22071 7.43831 1.19547L8.71823 0.874508C8.87529 0.835121 9.03527 0.927484 9.07969 1.0832L9.44168 2.35212C9.47014 2.45188 9.54812 2.52986 9.64788 2.55831L10.9168 2.92031C11.0725 2.96473 11.1649 3.12471 11.1255 3.28177L10.8045 4.56169C10.7793 4.66231 10.8078 4.76883 10.88 4.84335L11.7979 5.79131C11.9106 5.90764 11.9106 6.09236 11.7979 6.20869L10.88 7.15665C10.8078 7.23117 10.7793 7.33769 10.8045 7.43831L11.1255 8.71823C11.1649 8.87529 11.0725 9.03527 10.9168 9.07969L9.64788 9.44168C9.54812 9.47014 9.47014 9.54812 9.44168 9.64788L9.07969 10.9168C9.03527 11.0725 8.87529 11.1649 8.71823 11.1255L7.43831 10.8045C7.33769 10.7793 7.23117 10.8078 7.15665 10.88L6.20869 11.7979C6.09236 11.9106 5.90764 11.9106 5.79131 11.7979L4.84335 10.88C4.76883 10.8078 4.66231 10.7793 4.56169 10.8045L3.28177 11.1255C3.12471 11.1649 2.96473 11.0725 2.92031 10.9168L2.55831 9.64788C2.52986 9.54812 2.45188 9.47014 2.35212 9.44168L1.0832 9.07969C0.927484 9.03527 0.835121 8.87529 0.874508 8.71823L1.19547 7.43831C1.22071 7.33769 1.19217 7.23117 1.12 7.15665L0.202079 6.20869C0.0894369 6.09236 0.0894369 5.90764 0.202079 5.79131L1.12 4.84335C1.19217 4.76883 1.22071 4.66231 1.19547 4.56169L0.874508 3.28177C0.835121 3.12471 0.927484 2.96473 1.0832 2.92031L2.35212 2.55831C2.45188 2.52986 2.52986 2.45188 2.55831 2.35212L2.92031 1.0832C2.96473 0.927484 3.12471 0.835121 3.28177 0.874508L4.56169 1.19547C4.66231 1.22071 4.76883 1.19217 4.84335 1.12L5.79131 0.202079Z"></path>
                <path
                  style={{ color: "white" }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.76998 4.15662C7.98274 3.94779 8.32768 3.94779 8.54043 4.15662C8.73682 4.34938 8.75193 4.6527 8.58575 4.86247L8.54043 4.91284L5.55476 7.84338C5.35837 8.03614 5.04935 8.05097 4.83563 7.88786L4.78431 7.84338L3.35957 6.534C3.14681 6.32518 3.14681 5.9866 3.35957 5.77778C3.55596 5.58502 3.86498 5.57019 4.0787 5.73329L4.13002 5.77778L5.16953 6.70863L7.76998 4.15662Z"
                ></path>
              </svg>
            </a>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-gray-600 text-sm">
                @drarpitbansal.surgeon
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex space-x-6 text-gray-800">
          <div className="text-center">
            <p className="font-bold text-lg">109k</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">1.7K</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramHeader;
