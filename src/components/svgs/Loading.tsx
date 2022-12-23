const Loading = () => (
  <div style={{ padding: '16px', textAlign: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#FF6600">
      <path transform="translate(2)" d="M0 12 V20 H4 V12z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(8)" d="M0 12 V20 H4 V12z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.2"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(14)" d="M0 12 V20 H4 V12z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.4"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(20)" d="M0 12 V20 H4 V12z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.6"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(26)" d="M0 12 V20 H4 V12z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.8"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
    </svg>
  </div>
);

export default Loading;
