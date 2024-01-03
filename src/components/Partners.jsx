import React from "react";

const Partners = ({ roboto }) => {
  return (
    <div className="bg-black py-5 md:py-10" style={roboto}>
      <h1 className="font-bold leading-[27px] text-sm md:text-lg text-center text-white text-opacity-50 py-5 lg:py-16">
        Partners
      </h1>

      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="48"
          viewBox="0 0 148 48"
          fill="none"
        >
          <path
            d="M27.8036 20.9536C27.8036 18.9064 25.8185 16.7347 22.3769 16.7347C18.5105 16.7347 14.2697 19.5652 13.6133 25.2212C12.9508 30.9395 16.511 33.4663 20.0881 33.4663C23.664 33.4663 25.5465 32.0729 27.4583 30.2051C25.8076 28.1261 23.6786 29.0936 23.276 29.2962C22.8307 29.5194 22.2463 29.8281 21.0592 29.8281C19.6733 29.8281 18.2677 29.201 18.2677 26.6279C27.1276 25.7788 27.8036 23.002 27.8036 20.9536ZM23.4127 21.2964C23.3553 21.9272 23.0966 23.0191 18.6131 23.6194C19.5586 20.2618 21.3618 20.0129 22.195 20.0129C22.9759 20.0129 23.4736 20.618 23.4127 21.2964ZM8.40623 21.8417C8.40623 21.8417 6.50055 27.8175 6.35288 28.3189C6.30165 27.8175 4.90718 17.0837 4.90718 17.0837C1.66185 17.0837 -0.0742502 19.3895 -0.98925 21.8393C-0.98925 21.8393 -3.30735 27.8321 -3.49522 28.3336C-3.50618 27.8638 -3.85147 21.9016 -3.85147 21.9016C-4.0479 18.9051 -6.7832 17.0909 -9 17.0909L-6.33422 33.3528C-2.92912 33.3418 -1.1064 31.0396 -0.144976 28.5947C-0.144976 28.5947 1.89367 23.307 1.9779 23.0667C1.9986 23.2961 3.44438 33.3528 3.44438 33.3528C6.85192 33.3528 8.69048 31.197 9.67995 28.8399L14.4613 17.0909C11.094 17.0909 9.32122 19.3907 8.40623 21.8417ZM40.3186 16.7127C38.2239 16.7127 36.6097 17.851 35.2507 19.5334L35.2531 19.5212L36.461 9.75C33.6719 9.75 31.3929 12.1779 30.9598 15.7794L28.8382 33.2259C30.4474 33.2259 32.1518 32.7586 33.0716 31.5764C33.8952 32.6341 35.1189 33.4772 36.9306 33.4772C41.6339 33.4772 44.867 28.0103 44.867 22.8776C44.867 18.1939 42.5879 16.7127 40.3186 16.7127ZM39.8868 25.0944C39.3988 27.9639 37.8042 29.8988 36.2596 29.8988C34.7029 29.8988 34.0453 29.2108 34.0453 29.2108C34.3356 26.7024 34.5284 25.1639 35.0957 23.839C35.6618 22.514 37.0002 20.3997 38.4007 20.3997C39.7623 20.3997 40.3748 22.2261 39.8868 25.0944ZM56.6574 17.0922H53.3645L53.3803 16.9201C53.6048 14.7704 54.1197 13.6419 55.7863 13.4687C56.9245 13.3516 57.4394 12.7598 57.559 12.1205C57.6529 11.6191 57.9713 9.84637 57.9713 9.84637C51.3661 9.80857 49.2957 12.6598 48.7674 16.9934L48.7552 17.0909L48.6905 17.0934C47.6181 17.0934 46.4408 18.3074 46.2346 19.8494L46.1627 20.4167H48.3587L46.5152 35.6782L45.9565 38.4208L46.1833 38.4281C49.2664 38.311 51.2502 35.8795 51.6882 32.3389L53.1278 20.4167H54.16C55.1702 20.4167 56.3572 19.4042 56.5769 17.7119L56.6574 17.0922ZM73.7453 16.8092C69.951 16.8092 66.375 19.6018 65.2755 23.9951C64.1775 28.3873 65.847 33.5736 71.4232 33.5736C77.0018 33.5736 80.2065 28.1676 80.2065 23.6792C80.2065 19.1882 77.1712 16.8092 73.7453 16.8092ZM75.2835 24.9638C75.087 26.9561 74.2088 29.966 71.808 29.966C69.3968 29.966 69.7395 26.434 69.9727 24.7577C70.2233 22.9605 71.2327 20.4167 73.3815 20.4167C75.3225 20.4167 75.5055 22.714 75.2835 24.9638ZM98.9438 21.8417C98.9438 21.8417 97.038 27.8175 96.8917 28.3189C96.8392 27.8175 95.445 17.0837 95.445 17.0837C92.1997 17.0837 90.4642 19.3895 89.5485 21.8393C89.5485 21.8393 87.2318 27.8321 87.0435 28.3336C87.0322 27.8638 86.6872 21.9016 86.6872 21.9016C86.4907 18.9051 83.754 17.0909 81.5385 17.0909L84.2032 33.3528C87.6082 33.3418 89.4322 31.0396 90.3937 28.5947C90.3937 28.5947 92.4322 23.307 92.5163 23.0667C92.5372 23.2961 93.9818 33.3528 93.9818 33.3528C97.3898 33.3528 99.228 31.197 100.217 28.8399L105 17.0909C101.632 17.0909 99.8587 19.3907 98.9438 21.8417ZM59.7563 9.84637L56.9917 32.1437L56.9843 32.1401L56.4231 34.8974L56.6488 34.9046C59.6257 34.868 61.7376 32.256 62.1353 28.9618L63.732 16.1637C64.2165 12.2657 61.8926 9.84637 59.7563 9.84637Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="56"
          viewBox="0 0 200 56"
          fill="none"
        >
          <path
            d="M79.6147 37.0475H83.7734V29.9184H85.5815L89.9984 37.0475H94.4411L89.5593 29.1952C91.729 28.5495 93.3563 27.0771 93.3563 24.2875V24.1842C93.3563 20.3614 90.5925 18.5791 86.2272 18.5791H79.6147V37.0475ZM83.7734 27.0771V21.782H86.1239C88.1386 21.782 89.2752 22.4278 89.2752 24.3133V24.4167C89.2752 26.199 88.2162 27.0771 86.1239 27.0771H83.7734Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M101.579 37.3316C105.273 37.3316 107.598 35.7044 108.037 32.7855H104.498C104.266 33.9221 103.413 34.6712 101.683 34.6712C99.6422 34.6712 98.4282 33.3797 98.3249 31.1325H108.063V30.0993C108.063 25.269 104.963 23.2285 101.476 23.2285C97.55 23.2285 94.5278 25.9923 94.5278 30.2542V30.4608C94.5278 34.7745 97.4983 37.3316 101.579 37.3316ZM98.3765 28.8336C98.6606 26.9222 99.7972 25.8115 101.476 25.8115C103.258 25.8115 104.292 26.793 104.421 28.8336H98.3765Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M109.843 37.0477H113.562V17.417H109.843V37.0477Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M120.698 37.3317C122.92 37.3317 124.288 36.2985 124.986 34.9296V37.0476H128.705V23.5386H124.986V31.4683C124.986 33.4573 123.746 34.4388 122.171 34.4388C120.57 34.4388 119.82 33.5606 119.82 31.7266V23.5386H116.101V32.2432C116.101 35.7819 118.064 37.3317 120.698 37.3317Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M131.245 37.0475H134.991V29.0661C134.991 27.2322 136.153 26.3022 137.599 26.3022C138.917 26.3022 139.717 27.0771 139.717 28.8078V37.0475H143.437V29.0661C143.437 27.2322 144.599 26.3022 146.045 26.3022C147.388 26.3022 148.164 27.0771 148.164 28.8078V37.0475H151.883V28.3945C151.883 24.8041 149.946 23.2285 147.44 23.2285C145.736 23.2285 143.979 23.9517 142.894 25.579C142.249 23.9776 140.906 23.2285 139.123 23.2285C137.108 23.2285 135.662 24.3392 134.991 25.6048V23.5384H131.245V37.0475Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M160.532 37.3316C164.226 37.3316 166.551 35.7044 166.989 32.7855H163.451C163.218 33.9221 162.366 34.6712 160.635 34.6712C158.594 34.6712 157.381 33.3797 157.277 31.1325H167.015V30.0993C167.015 25.269 163.915 23.2285 160.428 23.2285C156.502 23.2285 153.48 25.9923 153.48 30.2542V30.4608C153.48 34.7745 156.451 37.3316 160.532 37.3316ZM157.329 28.8336C157.613 26.9222 158.75 25.8115 160.428 25.8115C162.211 25.8115 163.244 26.793 163.374 28.8336H157.329Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.303 19.684L65.0519 19.2356C64.728 18.6932 64.2712 18.2425 63.7246 17.9261L51.6885 10.9843C51.1435 10.6682 50.5249 10.5011 49.8948 10.5H49.3746C48.7445 10.5011 48.1259 10.6682 47.5808 10.9843L35.5449 17.9441C35.0013 18.2584 34.5498 18.7099 34.2354 19.2535L33.9843 19.7019C33.6682 20.2469 33.5011 20.8656 33.5 21.4956V35.3972C33.5011 36.0273 33.6682 36.6459 33.9843 37.1909L34.2354 37.6393C34.5579 38.1766 35.0076 38.6263 35.5449 38.9488L47.5988 45.8905C48.1411 46.2132 48.7616 46.3808 49.3925 46.3748H49.8948C50.5249 46.3737 51.1435 46.2066 51.6885 45.8905L63.7246 38.9309C64.2735 38.6236 64.7267 38.1704 65.0339 37.6214L65.303 37.173C65.6154 36.6264 65.7822 36.0087 65.7873 35.3792V21.4777C65.7863 20.8477 65.6192 20.229 65.303 19.684ZM49.3746 14.0874H49.8948L60.4062 20.1503L49.6437 26.3566L38.8812 20.1503L49.3746 14.0874ZM51.4374 41.8906L61.9308 35.8277L62.1998 35.3793V23.2536L51.4374 29.4779V41.8906Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="48"
          viewBox="0 0 200 48"
          fill="none"
        >
          <path
            d="M79.8036 20.9536C79.8036 18.9064 77.8185 16.7347 74.3769 16.7347C70.5105 16.7347 66.2697 19.5652 65.6133 25.2212C64.9508 30.9395 68.511 33.4663 72.0881 33.4663C75.664 33.4663 77.5465 32.0729 79.4583 30.2051C77.8076 28.1261 75.6786 29.0936 75.276 29.2962C74.8307 29.5194 74.2463 29.8281 73.0592 29.8281C71.6733 29.8281 70.2677 29.201 70.2677 26.6279C79.1276 25.7788 79.8036 23.002 79.8036 20.9536ZM75.4127 21.2964C75.3553 21.9272 75.0966 23.0191 70.6131 23.6194C71.5586 20.2618 73.3618 20.0129 74.195 20.0129C74.9759 20.0129 75.4736 20.618 75.4127 21.2964ZM60.4062 21.8417C60.4062 21.8417 58.5006 27.8175 58.3529 28.3189C58.3017 27.8175 56.9072 17.0837 56.9072 17.0837C53.6618 17.0837 51.9257 19.3895 51.0107 21.8393C51.0107 21.8393 48.6926 27.8321 48.5048 28.3336C48.4938 27.8638 48.1485 21.9016 48.1485 21.9016C47.9521 18.9051 45.2168 17.0909 43 17.0909L45.6658 33.3528C49.0709 33.3418 50.8936 31.0396 51.855 28.5947C51.855 28.5947 53.8937 23.307 53.9779 23.0667C53.9986 23.2961 55.4444 33.3528 55.4444 33.3528C58.8519 33.3528 60.6905 31.197 61.68 28.8399L66.4613 17.0909C63.094 17.0909 61.3212 19.3907 60.4062 21.8417ZM92.3186 16.7127C90.2239 16.7127 88.6097 17.851 87.2507 19.5334L87.2531 19.5212L88.461 9.75C85.6719 9.75 83.3929 12.1779 82.9598 15.7794L80.8382 33.2259C82.4474 33.2259 84.1518 32.7586 85.0716 31.5764C85.8952 32.6341 87.1189 33.4772 88.9306 33.4772C93.6339 33.4772 96.867 28.0103 96.867 22.8776C96.867 18.1939 94.5879 16.7127 92.3186 16.7127ZM91.8868 25.0944C91.3988 27.9639 89.8042 29.8988 88.2596 29.8988C86.7029 29.8988 86.0453 29.2108 86.0453 29.2108C86.3356 26.7024 86.5284 25.1639 87.0957 23.839C87.6618 22.514 89.0002 20.3997 90.4007 20.3997C91.7623 20.3997 92.3748 22.2261 91.8868 25.0944ZM108.657 17.0922H105.365L105.38 16.9201C105.605 14.7704 106.12 13.6419 107.786 13.4687C108.925 13.3516 109.439 12.7598 109.559 12.1205C109.653 11.6191 109.971 9.84637 109.971 9.84637C103.366 9.80857 101.296 12.6598 100.767 16.9934L100.755 17.0909L100.691 17.0934C99.6181 17.0934 98.4408 18.3074 98.2346 19.8494L98.1627 20.4167H100.359L98.5152 35.6782L97.9565 38.4208L98.1833 38.4281C101.266 38.311 103.25 35.8795 103.688 32.3389L105.128 20.4167H106.16C107.17 20.4167 108.357 19.4042 108.577 17.7119L108.657 17.0922ZM125.745 16.8092C121.951 16.8092 118.375 19.6018 117.275 23.9951C116.177 28.3873 117.847 33.5736 123.423 33.5736C129.002 33.5736 132.206 28.1676 132.206 23.6792C132.206 19.1882 129.171 16.8092 125.745 16.8092ZM127.284 24.9638C127.087 26.9561 126.209 29.966 123.808 29.966C121.397 29.966 121.739 26.434 121.973 24.7577C122.223 22.9605 123.233 20.4167 125.382 20.4167C127.323 20.4167 127.506 22.714 127.284 24.9638ZM150.944 21.8417C150.944 21.8417 149.038 27.8175 148.892 28.3189C148.839 27.8175 147.445 17.0837 147.445 17.0837C144.2 17.0837 142.464 19.3895 141.548 21.8393C141.548 21.8393 139.232 27.8321 139.044 28.3336C139.032 27.8638 138.687 21.9016 138.687 21.9016C138.491 18.9051 135.754 17.0909 133.538 17.0909L136.203 33.3528C139.608 33.3418 141.432 31.0396 142.394 28.5947C142.394 28.5947 144.432 23.307 144.516 23.0667C144.537 23.2961 145.982 33.3528 145.982 33.3528C149.39 33.3528 151.228 31.197 152.217 28.8399L157 17.0909C153.632 17.0909 151.859 19.3907 150.944 21.8417ZM111.756 9.84637L108.992 32.1437L108.984 32.1401L108.423 34.8974L108.649 34.9046C111.626 34.868 113.738 32.256 114.135 28.9618L115.732 16.1637C116.216 12.2657 113.893 9.84637 111.756 9.84637Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="56"
          viewBox="0 0 200 56"
          fill="none"
        >
          <path
            d="M79.6147 37.0475H83.7734V29.9184H85.5815L89.9984 37.0475H94.4411L89.5593 29.1952C91.729 28.5495 93.3563 27.0771 93.3563 24.2875V24.1842C93.3563 20.3614 90.5925 18.5791 86.2272 18.5791H79.6147V37.0475ZM83.7734 27.0771V21.782H86.1239C88.1386 21.782 89.2752 22.4278 89.2752 24.3133V24.4167C89.2752 26.199 88.2162 27.0771 86.1239 27.0771H83.7734Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M101.579 37.3316C105.273 37.3316 107.598 35.7044 108.037 32.7855H104.498C104.266 33.9221 103.413 34.6712 101.683 34.6712C99.6422 34.6712 98.4282 33.3797 98.3249 31.1325H108.063V30.0993C108.063 25.269 104.963 23.2285 101.476 23.2285C97.55 23.2285 94.5278 25.9923 94.5278 30.2542V30.4608C94.5278 34.7745 97.4983 37.3316 101.579 37.3316ZM98.3765 28.8336C98.6606 26.9222 99.7972 25.8115 101.476 25.8115C103.258 25.8115 104.292 26.793 104.421 28.8336H98.3765Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M109.843 37.0477H113.562V17.417H109.843V37.0477Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M120.698 37.3317C122.92 37.3317 124.288 36.2985 124.986 34.9296V37.0476H128.705V23.5386H124.986V31.4683C124.986 33.4573 123.746 34.4388 122.171 34.4388C120.57 34.4388 119.82 33.5606 119.82 31.7266V23.5386H116.101V32.2432C116.101 35.7819 118.064 37.3317 120.698 37.3317Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M131.245 37.0475H134.991V29.0661C134.991 27.2322 136.153 26.3022 137.599 26.3022C138.917 26.3022 139.717 27.0771 139.717 28.8078V37.0475H143.437V29.0661C143.437 27.2322 144.599 26.3022 146.045 26.3022C147.388 26.3022 148.164 27.0771 148.164 28.8078V37.0475H151.883V28.3945C151.883 24.8041 149.946 23.2285 147.44 23.2285C145.736 23.2285 143.979 23.9517 142.894 25.579C142.249 23.9776 140.906 23.2285 139.123 23.2285C137.108 23.2285 135.662 24.3392 134.991 25.6048V23.5384H131.245V37.0475Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M160.532 37.3316C164.226 37.3316 166.551 35.7044 166.989 32.7855H163.451C163.218 33.9221 162.366 34.6712 160.635 34.6712C158.594 34.6712 157.381 33.3797 157.277 31.1325H167.015V30.0993C167.015 25.269 163.915 23.2285 160.428 23.2285C156.502 23.2285 153.48 25.9923 153.48 30.2542V30.4608C153.48 34.7745 156.451 37.3316 160.532 37.3316ZM157.329 28.8336C157.613 26.9222 158.75 25.8115 160.428 25.8115C162.211 25.8115 163.244 26.793 163.374 28.8336H157.329Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.303 19.684L65.0519 19.2356C64.728 18.6932 64.2712 18.2425 63.7246 17.9261L51.6885 10.9843C51.1435 10.6682 50.5249 10.5011 49.8948 10.5H49.3746C48.7445 10.5011 48.1259 10.6682 47.5808 10.9843L35.5449 17.9441C35.0013 18.2584 34.5498 18.7099 34.2354 19.2535L33.9843 19.7019C33.6682 20.2469 33.5011 20.8656 33.5 21.4956V35.3972C33.5011 36.0273 33.6682 36.6459 33.9843 37.1909L34.2354 37.6393C34.5579 38.1766 35.0076 38.6263 35.5449 38.9488L47.5988 45.8905C48.1411 46.2132 48.7616 46.3808 49.3925 46.3748H49.8948C50.5249 46.3737 51.1435 46.2066 51.6885 45.8905L63.7246 38.9309C64.2735 38.6236 64.7267 38.1704 65.0339 37.6214L65.303 37.173C65.6154 36.6264 65.7822 36.0087 65.7873 35.3792V21.4777C65.7863 20.8477 65.6192 20.229 65.303 19.684ZM49.3746 14.0874H49.8948L60.4062 20.1503L49.6437 26.3566L38.8812 20.1503L49.3746 14.0874ZM51.4374 41.8906L61.9308 35.8277L62.1998 35.3793V23.2536L51.4374 29.4779V41.8906Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="48"
          viewBox="0 0 200 48"
          fill="none"
        >
          <path
            d="M79.8036 20.9536C79.8036 18.9064 77.8185 16.7347 74.3769 16.7347C70.5105 16.7347 66.2697 19.5652 65.6133 25.2212C64.9508 30.9395 68.511 33.4663 72.0881 33.4663C75.664 33.4663 77.5465 32.0729 79.4583 30.2051C77.8076 28.1261 75.6786 29.0936 75.276 29.2962C74.8307 29.5194 74.2463 29.8281 73.0592 29.8281C71.6733 29.8281 70.2677 29.201 70.2677 26.6279C79.1276 25.7788 79.8036 23.002 79.8036 20.9536ZM75.4127 21.2964C75.3553 21.9272 75.0966 23.0191 70.6131 23.6194C71.5586 20.2618 73.3618 20.0129 74.195 20.0129C74.9759 20.0129 75.4736 20.618 75.4127 21.2964ZM60.4062 21.8417C60.4062 21.8417 58.5006 27.8175 58.3529 28.3189C58.3017 27.8175 56.9072 17.0837 56.9072 17.0837C53.6618 17.0837 51.9257 19.3895 51.0107 21.8393C51.0107 21.8393 48.6926 27.8321 48.5048 28.3336C48.4938 27.8638 48.1485 21.9016 48.1485 21.9016C47.9521 18.9051 45.2168 17.0909 43 17.0909L45.6658 33.3528C49.0709 33.3418 50.8936 31.0396 51.855 28.5947C51.855 28.5947 53.8937 23.307 53.9779 23.0667C53.9986 23.2961 55.4444 33.3528 55.4444 33.3528C58.8519 33.3528 60.6905 31.197 61.68 28.8399L66.4613 17.0909C63.094 17.0909 61.3212 19.3907 60.4062 21.8417ZM92.3186 16.7127C90.2239 16.7127 88.6097 17.851 87.2507 19.5334L87.2531 19.5212L88.461 9.75C85.6719 9.75 83.3929 12.1779 82.9598 15.7794L80.8382 33.2259C82.4474 33.2259 84.1518 32.7586 85.0716 31.5764C85.8952 32.6341 87.1189 33.4772 88.9306 33.4772C93.6339 33.4772 96.867 28.0103 96.867 22.8776C96.867 18.1939 94.5879 16.7127 92.3186 16.7127ZM91.8868 25.0944C91.3988 27.9639 89.8042 29.8988 88.2596 29.8988C86.7029 29.8988 86.0453 29.2108 86.0453 29.2108C86.3356 26.7024 86.5284 25.1639 87.0957 23.839C87.6618 22.514 89.0002 20.3997 90.4007 20.3997C91.7623 20.3997 92.3748 22.2261 91.8868 25.0944ZM108.657 17.0922H105.365L105.38 16.9201C105.605 14.7704 106.12 13.6419 107.786 13.4687C108.925 13.3516 109.439 12.7598 109.559 12.1205C109.653 11.6191 109.971 9.84637 109.971 9.84637C103.366 9.80857 101.296 12.6598 100.767 16.9934L100.755 17.0909L100.691 17.0934C99.6181 17.0934 98.4408 18.3074 98.2346 19.8494L98.1627 20.4167H100.359L98.5152 35.6782L97.9565 38.4208L98.1833 38.4281C101.266 38.311 103.25 35.8795 103.688 32.3389L105.128 20.4167H106.16C107.17 20.4167 108.357 19.4042 108.577 17.7119L108.657 17.0922ZM125.745 16.8092C121.951 16.8092 118.375 19.6018 117.275 23.9951C116.177 28.3873 117.847 33.5736 123.423 33.5736C129.002 33.5736 132.206 28.1676 132.206 23.6792C132.206 19.1882 129.171 16.8092 125.745 16.8092ZM127.284 24.9638C127.087 26.9561 126.209 29.966 123.808 29.966C121.397 29.966 121.739 26.434 121.973 24.7577C122.223 22.9605 123.233 20.4167 125.382 20.4167C127.323 20.4167 127.506 22.714 127.284 24.9638ZM150.944 21.8417C150.944 21.8417 149.038 27.8175 148.892 28.3189C148.839 27.8175 147.445 17.0837 147.445 17.0837C144.2 17.0837 142.464 19.3895 141.548 21.8393C141.548 21.8393 139.232 27.8321 139.044 28.3336C139.032 27.8638 138.687 21.9016 138.687 21.9016C138.491 18.9051 135.754 17.0909 133.538 17.0909L136.203 33.3528C139.608 33.3418 141.432 31.0396 142.394 28.5947C142.394 28.5947 144.432 23.307 144.516 23.0667C144.537 23.2961 145.982 33.3528 145.982 33.3528C149.39 33.3528 151.228 31.197 152.217 28.8399L157 17.0909C153.632 17.0909 151.859 19.3907 150.944 21.8417ZM111.756 9.84637L108.992 32.1437L108.984 32.1401L108.423 34.8974L108.649 34.9046C111.626 34.868 113.738 32.256 114.135 28.9618L115.732 16.1637C116.216 12.2657 113.893 9.84637 111.756 9.84637Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="56"
          viewBox="0 0 200 56"
          fill="none"
        >
          <path
            d="M79.6147 37.0475H83.7734V29.9184H85.5815L89.9984 37.0475H94.4411L89.5593 29.1952C91.729 28.5495 93.3563 27.0771 93.3563 24.2875V24.1842C93.3563 20.3614 90.5925 18.5791 86.2272 18.5791H79.6147V37.0475ZM83.7734 27.0771V21.782H86.1239C88.1386 21.782 89.2752 22.4278 89.2752 24.3133V24.4167C89.2752 26.199 88.2162 27.0771 86.1239 27.0771H83.7734Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M101.579 37.3316C105.273 37.3316 107.598 35.7044 108.037 32.7855H104.498C104.266 33.9221 103.413 34.6712 101.683 34.6712C99.6422 34.6712 98.4282 33.3797 98.3249 31.1325H108.063V30.0993C108.063 25.269 104.963 23.2285 101.476 23.2285C97.55 23.2285 94.5278 25.9923 94.5278 30.2542V30.4608C94.5278 34.7745 97.4983 37.3316 101.579 37.3316ZM98.3765 28.8336C98.6606 26.9222 99.7972 25.8115 101.476 25.8115C103.258 25.8115 104.292 26.793 104.421 28.8336H98.3765Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M109.843 37.0477H113.562V17.417H109.843V37.0477Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M120.698 37.3317C122.92 37.3317 124.288 36.2985 124.986 34.9296V37.0476H128.705V23.5386H124.986V31.4683C124.986 33.4573 123.746 34.4388 122.171 34.4388C120.57 34.4388 119.82 33.5606 119.82 31.7266V23.5386H116.101V32.2432C116.101 35.7819 118.064 37.3317 120.698 37.3317Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M131.245 37.0475H134.991V29.0661C134.991 27.2322 136.153 26.3022 137.599 26.3022C138.917 26.3022 139.717 27.0771 139.717 28.8078V37.0475H143.437V29.0661C143.437 27.2322 144.599 26.3022 146.045 26.3022C147.388 26.3022 148.164 27.0771 148.164 28.8078V37.0475H151.883V28.3945C151.883 24.8041 149.946 23.2285 147.44 23.2285C145.736 23.2285 143.979 23.9517 142.894 25.579C142.249 23.9776 140.906 23.2285 139.123 23.2285C137.108 23.2285 135.662 24.3392 134.991 25.6048V23.5384H131.245V37.0475Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            d="M160.532 37.3316C164.226 37.3316 166.551 35.7044 166.989 32.7855H163.451C163.218 33.9221 162.366 34.6712 160.635 34.6712C158.594 34.6712 157.381 33.3797 157.277 31.1325H167.015V30.0993C167.015 25.269 163.915 23.2285 160.428 23.2285C156.502 23.2285 153.48 25.9923 153.48 30.2542V30.4608C153.48 34.7745 156.451 37.3316 160.532 37.3316ZM157.329 28.8336C157.613 26.9222 158.75 25.8115 160.428 25.8115C162.211 25.8115 163.244 26.793 163.374 28.8336H157.329Z"
            fill="white"
            fill-opacity="0.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.303 19.684L65.0519 19.2356C64.728 18.6932 64.2712 18.2425 63.7246 17.9261L51.6885 10.9843C51.1435 10.6682 50.5249 10.5011 49.8948 10.5H49.3746C48.7445 10.5011 48.1259 10.6682 47.5808 10.9843L35.5449 17.9441C35.0013 18.2584 34.5498 18.7099 34.2354 19.2535L33.9843 19.7019C33.6682 20.2469 33.5011 20.8656 33.5 21.4956V35.3972C33.5011 36.0273 33.6682 36.6459 33.9843 37.1909L34.2354 37.6393C34.5579 38.1766 35.0076 38.6263 35.5449 38.9488L47.5988 45.8905C48.1411 46.2132 48.7616 46.3808 49.3925 46.3748H49.8948C50.5249 46.3737 51.1435 46.2066 51.6885 45.8905L63.7246 38.9309C64.2735 38.6236 64.7267 38.1704 65.0339 37.6214L65.303 37.173C65.6154 36.6264 65.7822 36.0087 65.7873 35.3792V21.4777C65.7863 20.8477 65.6192 20.229 65.303 19.684ZM49.3746 14.0874H49.8948L60.4062 20.1503L49.6437 26.3566L38.8812 20.1503L49.3746 14.0874ZM51.4374 41.8906L61.9308 35.8277L62.1998 35.3793V23.2536L51.4374 29.4779V41.8906Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="48"
          viewBox="0 0 148 48"
          fill="none"
        >
          <path
            d="M79.8036 20.9536C79.8036 18.9064 77.8185 16.7347 74.3769 16.7347C70.5105 16.7347 66.2697 19.5652 65.6133 25.2212C64.9508 30.9395 68.511 33.4663 72.0881 33.4663C75.664 33.4663 77.5465 32.0729 79.4583 30.2051C77.8076 28.1261 75.6786 29.0936 75.276 29.2962C74.8307 29.5194 74.2463 29.8281 73.0592 29.8281C71.6733 29.8281 70.2677 29.201 70.2677 26.6279C79.1276 25.7788 79.8036 23.002 79.8036 20.9536ZM75.4127 21.2964C75.3553 21.9272 75.0966 23.0191 70.6131 23.6194C71.5586 20.2618 73.3618 20.0129 74.195 20.0129C74.9759 20.0129 75.4736 20.618 75.4127 21.2964ZM60.4062 21.8417C60.4062 21.8417 58.5006 27.8175 58.3529 28.3189C58.3017 27.8175 56.9072 17.0837 56.9072 17.0837C53.6618 17.0837 51.9257 19.3895 51.0107 21.8393C51.0107 21.8393 48.6926 27.8321 48.5048 28.3336C48.4938 27.8638 48.1485 21.9016 48.1485 21.9016C47.9521 18.9051 45.2168 17.0909 43 17.0909L45.6658 33.3528C49.0709 33.3418 50.8936 31.0396 51.855 28.5947C51.855 28.5947 53.8937 23.307 53.9779 23.0667C53.9986 23.2961 55.4444 33.3528 55.4444 33.3528C58.8519 33.3528 60.6905 31.197 61.68 28.8399L66.4613 17.0909C63.094 17.0909 61.3212 19.3907 60.4062 21.8417ZM92.3186 16.7127C90.2239 16.7127 88.6097 17.851 87.2507 19.5334L87.2531 19.5212L88.461 9.75C85.6719 9.75 83.3929 12.1779 82.9598 15.7794L80.8382 33.2259C82.4474 33.2259 84.1518 32.7586 85.0716 31.5764C85.8952 32.6341 87.1189 33.4772 88.9306 33.4772C93.6339 33.4772 96.867 28.0103 96.867 22.8776C96.867 18.1939 94.5879 16.7127 92.3186 16.7127ZM91.8868 25.0944C91.3988 27.9639 89.8042 29.8988 88.2596 29.8988C86.7029 29.8988 86.0453 29.2108 86.0453 29.2108C86.3356 26.7024 86.5284 25.1639 87.0957 23.839C87.6618 22.514 89.0002 20.3997 90.4007 20.3997C91.7623 20.3997 92.3748 22.2261 91.8868 25.0944ZM108.657 17.0922H105.365L105.38 16.9201C105.605 14.7704 106.12 13.6419 107.786 13.4687C108.925 13.3516 109.439 12.7598 109.559 12.1205C109.653 11.6191 109.971 9.84637 109.971 9.84637C103.366 9.80857 101.296 12.6598 100.767 16.9934L100.755 17.0909L100.691 17.0934C99.6181 17.0934 98.4408 18.3074 98.2346 19.8494L98.1627 20.4167H100.359L98.5152 35.6782L97.9565 38.4208L98.1833 38.4281C101.266 38.311 103.25 35.8795 103.688 32.3389L105.128 20.4167H106.16C107.17 20.4167 108.357 19.4042 108.577 17.7119L108.657 17.0922ZM125.745 16.8092C121.951 16.8092 118.375 19.6018 117.275 23.9951C116.177 28.3873 117.847 33.5736 123.423 33.5736C129.002 33.5736 132.206 28.1676 132.206 23.6792C132.206 19.1882 129.171 16.8092 125.745 16.8092ZM127.284 24.9638C127.087 26.9561 126.209 29.966 123.808 29.966C121.397 29.966 121.739 26.434 121.973 24.7577C122.223 22.9605 123.233 20.4167 125.382 20.4167C127.323 20.4167 127.506 22.714 127.284 24.9638ZM150.944 21.8417C150.944 21.8417 149.038 27.8175 148.892 28.3189C148.839 27.8175 147.445 17.0837 147.445 17.0837C144.2 17.0837 142.464 19.3895 141.548 21.8393C141.548 21.8393 139.232 27.8321 139.044 28.3336C139.032 27.8638 138.687 21.9016 138.687 21.9016C138.491 18.9051 135.754 17.0909 133.538 17.0909L136.203 33.3528C139.608 33.3418 141.432 31.0396 142.394 28.5947C142.394 28.5947 144.432 23.307 144.516 23.0667C144.537 23.2961 145.982 33.3528 145.982 33.3528C149.39 33.3528 151.228 31.197 152.217 28.8399L157 17.0909C153.632 17.0909 151.859 19.3907 150.944 21.8417ZM111.756 9.84637L108.992 32.1437L108.984 32.1401L108.423 34.8974L108.649 34.9046C111.626 34.868 113.738 32.256 114.135 28.9618L115.732 16.1637C116.216 12.2657 113.893 9.84637 111.756 9.84637Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Partners;
