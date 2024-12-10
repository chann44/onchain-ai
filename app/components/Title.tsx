import React from "react";
import anime from "animejs";

const Title = () => {
  React.useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    timeline.add({
      targets: ".title-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 14000,
      delay: 100,
    });
  }, []);

  return (
    <svg
      width="196"
      height="57"
      viewBox="0 0 196 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-primary"
    >
      <path
        d="M29.0938 10H19.5312C9.84901 10 2 17.849 2 27.5312V37.0938C2 46.776 9.84901 54.625 19.5312 54.625H29.0938C38.776 54.625 46.625 46.776 46.625 37.0938V27.5312C46.625 17.849 38.776 10 29.0938 10Z"
        className="stroke-primary"
        stroke-width="4"
      />
      <path
        d="M63.9318 46V42.9318L78.7955 23.8409V23.5682H64.4091V19.8182H83.9773V23.0227L69.5227 41.9773V42.25H84.4545V46H63.9318ZM100.878 46.5455C98.3551 46.5455 96.179 45.9886 94.3494 44.875C92.5312 43.75 91.1278 42.1818 90.1392 40.1705C89.1619 38.1477 88.6733 35.7955 88.6733 33.1136C88.6733 30.4318 89.1619 28.0682 90.1392 26.0227C91.1278 23.9659 92.5028 22.3636 94.2642 21.2159C96.0369 20.0568 98.1051 19.4773 100.469 19.4773C101.832 19.4773 103.179 19.7045 104.509 20.1591C105.838 20.6136 107.048 21.3523 108.139 22.375C109.23 23.3864 110.099 24.7273 110.747 26.3977C111.395 28.0682 111.719 30.125 111.719 32.5682V34.2727H91.5369V30.7955H107.628C107.628 29.3182 107.332 28 106.741 26.8409C106.162 25.6818 105.332 24.767 104.253 24.0966C103.185 23.4261 101.923 23.0909 100.469 23.0909C98.8665 23.0909 97.4801 23.4886 96.3097 24.2841C95.1506 25.0682 94.2585 26.0909 93.6335 27.3523C93.0085 28.6136 92.696 29.9659 92.696 31.4091V33.7273C92.696 35.7045 93.0369 37.3807 93.7188 38.7557C94.4119 40.1193 95.3722 41.1591 96.5994 41.875C97.8267 42.5795 99.2528 42.9318 100.878 42.9318C101.935 42.9318 102.889 42.7841 103.741 42.4886C104.605 42.1818 105.349 41.7273 105.974 41.125C106.599 40.5114 107.082 39.75 107.423 38.8409L111.31 39.9318C110.901 41.25 110.213 42.4091 109.247 43.4091C108.281 44.3977 107.088 45.1705 105.668 45.7273C104.247 46.2727 102.651 46.5455 100.878 46.5455ZM117.838 55.8182V19.8182H121.724V23.9773H122.202C122.497 23.5227 122.906 22.9432 123.429 22.2386C123.963 21.5227 124.724 20.8864 125.713 20.3295C126.713 19.7614 128.065 19.4773 129.77 19.4773C131.974 19.4773 133.918 20.0284 135.599 21.1307C137.281 22.233 138.594 23.7955 139.537 25.8182C140.48 27.8409 140.952 30.2273 140.952 32.9773C140.952 35.75 140.48 38.1534 139.537 40.1875C138.594 42.2102 137.287 43.7784 135.616 44.892C133.946 45.9943 132.02 46.5455 129.838 46.5455C128.156 46.5455 126.81 46.267 125.798 45.7102C124.787 45.142 124.009 44.5 123.463 43.7841C122.918 43.0568 122.497 42.4545 122.202 41.9773H121.861V55.8182H117.838ZM121.793 32.9091C121.793 34.8864 122.082 36.6307 122.662 38.142C123.241 39.642 124.088 40.8182 125.202 41.6705C126.315 42.5114 127.679 42.9318 129.293 42.9318C130.974 42.9318 132.378 42.4886 133.503 41.6023C134.639 40.7045 135.491 39.5 136.06 37.9886C136.639 36.4659 136.929 34.7727 136.929 32.9091C136.929 31.0682 136.645 29.4091 136.077 27.9318C135.52 26.4432 134.673 25.267 133.537 24.4034C132.412 23.5284 130.997 23.0909 129.293 23.0909C127.656 23.0909 126.281 23.5057 125.168 24.3352C124.054 25.1534 123.213 26.3011 122.645 27.7784C122.077 29.2443 121.793 30.9545 121.793 32.9091ZM150.02 46.2727C149.179 46.2727 148.457 45.9716 147.855 45.3693C147.253 44.767 146.952 44.0455 146.952 43.2045C146.952 42.3636 147.253 41.642 147.855 41.0398C148.457 40.4375 149.179 40.1364 150.02 40.1364C150.861 40.1364 151.582 40.4375 152.185 41.0398C152.787 41.642 153.088 42.3636 153.088 43.2045C153.088 43.7614 152.946 44.2727 152.662 44.7386C152.389 45.2045 152.02 45.5795 151.554 45.8636C151.099 46.1364 150.588 46.2727 150.02 46.2727ZM168.011 46.6136C166.352 46.6136 164.847 46.3011 163.494 45.6761C162.142 45.0398 161.068 44.125 160.273 42.9318C159.477 41.7273 159.08 40.2727 159.08 38.5682C159.08 37.0682 159.375 35.8523 159.966 34.9205C160.557 33.9773 161.347 33.2386 162.335 32.7045C163.324 32.1705 164.415 31.7727 165.608 31.5114C166.813 31.2386 168.023 31.0227 169.239 30.8636C170.83 30.6591 172.119 30.5057 173.108 30.4034C174.108 30.2898 174.835 30.1023 175.29 29.8409C175.756 29.5795 175.989 29.125 175.989 28.4773V28.3409C175.989 26.6591 175.528 25.3523 174.608 24.4205C173.699 23.4886 172.318 23.0227 170.466 23.0227C168.545 23.0227 167.04 23.4432 165.949 24.2841C164.858 25.125 164.091 26.0227 163.648 26.9773L159.83 25.6136C160.511 24.0227 161.42 22.7841 162.557 21.8977C163.705 21 164.955 20.375 166.307 20.0227C167.67 19.6591 169.011 19.4773 170.33 19.4773C171.17 19.4773 172.136 19.5795 173.227 19.7841C174.33 19.9773 175.392 20.3807 176.415 20.9943C177.449 21.608 178.307 22.5341 178.989 23.7727C179.67 25.0114 180.011 26.6705 180.011 28.75V46H175.989V42.4545H175.784C175.511 43.0227 175.057 43.6307 174.42 44.2784C173.784 44.9261 172.938 45.4773 171.881 45.9318C170.824 46.3864 169.534 46.6136 168.011 46.6136ZM168.625 43C170.216 43 171.557 42.6875 172.648 42.0625C173.75 41.4375 174.58 40.6307 175.136 39.642C175.705 38.6534 175.989 37.6136 175.989 36.5227V32.8409C175.818 33.0455 175.443 33.233 174.864 33.4034C174.295 33.5625 173.636 33.7045 172.886 33.8295C172.148 33.9432 171.426 34.0455 170.722 34.1364C170.028 34.2159 169.466 34.2841 169.034 34.3409C167.989 34.4773 167.011 34.6989 166.102 35.0057C165.205 35.3011 164.477 35.75 163.92 36.3523C163.375 36.9432 163.102 37.75 163.102 38.7727C163.102 40.1705 163.619 41.2273 164.653 41.9432C165.699 42.6477 167.023 43 168.625 43ZM187.354 46V19.8182H191.376V46H187.354ZM189.399 15.4545C188.615 15.4545 187.939 15.1875 187.371 14.6534C186.814 14.1193 186.536 13.4773 186.536 12.7273C186.536 11.9773 186.814 11.3352 187.371 10.8011C187.939 10.267 188.615 10 189.399 10C190.183 10 190.854 10.267 191.411 10.8011C191.979 11.3352 192.263 11.9773 192.263 12.7273C192.263 13.4773 191.979 14.1193 191.411 14.6534C190.854 15.1875 190.183 15.4545 189.399 15.4545Z"
        className="fill-primary"
      />
    </svg>
  );
};

export default Title;