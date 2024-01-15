import "./SectionOne.css";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <section className="section-three" id="contact">
      <div className="left-half">
        <div className="booking-details">
          <p className="cta-text">have something in mind?</p>
          <a
            className="cta"
            href="https://calendly.com/nusrynizam/30min"
            target="_blank"
          >
            BOOK A FREE CALL
          </a>
        </div>
      </div>
      <div className="right-half">
        <div className="socials">
          <a
            className="icon-container"
            href="https://dribbble.com/nusry"
            target="_blank"
            title="Dribbble"
          >
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
              height="44"
              id="screenshot-79a38716-577b-800a-8003-b97f88ae8af9"
              viewBox="3477 2022.333 44 44"
              fill="none"
              version="1.1"
            >
              <g id="shape-79a38716-577b-800a-8003-b97f88ae8af9">
                <g id="fills-79a38716-577b-800a-8003-b97f88ae8af9">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    rx="0"
                    ry="0"
                    d="M3497.027,2022.385C3492.775,2022.802,3488.845,2024.368,3485.400,2027.020C3483.722,2028.311,3481.543,2030.738,3480.284,2032.718C3479.740,2033.573,3478.682,2035.739,3478.302,2036.773C3477.878,2037.929,3477.427,2039.696,3477.204,2041.067C3476.932,2042.745,3476.932,2045.931,3477.204,2047.609C3477.589,2049.981,3478.198,2051.899,3479.240,2054.022C3480.378,2056.341,3481.562,2057.985,3483.457,2059.880C3485.353,2061.774,3486.998,2062.957,3489.319,2064.095C3491.443,2065.136,3493.362,2065.745,3495.735,2066.129C3497.414,2066.401,3500.602,2066.401,3502.281,2066.129C3504.654,2065.745,3506.573,2065.136,3508.697,2064.095C3511.018,2062.957,3512.663,2061.774,3514.558,2059.880C3516.454,2057.985,3517.638,2056.341,3518.776,2054.022C3519.532,2052.481,3519.913,2051.471,3520.320,2049.923C3520.862,2047.861,3521.000,2046.731,3521.000,2044.338C3521.000,2041.945,3520.862,2040.815,3520.320,2038.753C3519.913,2037.205,3519.532,2036.195,3518.776,2034.654C3517.638,2032.335,3516.454,2030.691,3514.558,2028.796C3512.663,2026.902,3511.018,2025.719,3508.697,2024.581C3506.575,2023.541,3504.618,2022.920,3502.324,2022.559C3501.058,2022.360,3498.231,2022.267,3497.027,2022.385ZZM3501.646,2026.045C3504.692,2026.477,3507.633,2027.708,3510.145,2029.603L3510.903,2030.175L3510.618,2030.419C3508.252,2032.444,3506.118,2033.839,3503.271,2035.222C3502.418,2035.636,3501.646,2035.987,3501.554,2036.003C3501.418,2036.026,3501.224,2035.748,3500.520,2034.521C3499.017,2031.898,3497.075,2028.876,3495.666,2026.964C3495.409,2026.616,3495.233,2026.299,3495.274,2026.259C3495.339,2026.195,3496.640,2025.984,3497.587,2025.884C3498.213,2025.818,3500.759,2025.919,3501.646,2026.045ZZM3492.049,2028.026C3493.293,2029.677,3495.434,2032.919,3496.739,2035.128C3497.775,2036.880,3497.997,2037.286,3497.948,2037.335C3497.865,2037.418,3495.611,2038.059,3494.228,2038.393C3491.779,2038.984,3488.997,2039.451,3486.261,2039.731C3484.854,2039.875,3481.116,2040.085,3481.054,2040.024C3480.988,2039.957,3481.498,2038.291,3481.834,2037.479C3483.272,2034.001,3485.547,2031.173,3488.595,2029.074C3489.515,2028.440,3491.529,2027.355,3491.608,2027.449C3491.636,2027.483,3491.834,2027.742,3492.049,2028.026ZZM3514.483,2034.251C3515.559,2035.869,3516.458,2037.933,3516.961,2039.941C3517.317,2041.363,3517.603,2043.736,3517.417,2043.736C3517.369,2043.736,3516.879,2043.661,3516.329,2043.569C3514.133,2043.204,3513.736,2043.176,3510.850,2043.180C3508.031,2043.184,3507.287,2043.242,3505.320,2043.611C3505.087,2043.655,3505.068,2043.629,3504.699,2042.771C3504.489,2042.284,3504.034,2041.288,3503.686,2040.558C3503.339,2039.829,3503.065,2039.226,3503.077,2039.219C3503.089,2039.213,3503.390,2039.078,3503.745,2038.920C3506.962,2037.488,3510.533,2035.231,3512.831,2033.175L3513.348,2032.713L3513.592,2032.995C3513.726,2033.150,3514.127,2033.715,3514.483,2034.251ZZM3500.139,2041.433C3500.649,2042.450,3501.604,2044.530,3501.571,2044.554C3501.559,2044.563,3501.205,2044.694,3500.785,2044.844C3496.704,2046.303,3492.809,2048.619,3489.405,2051.613C3488.285,2052.598,3486.482,2054.414,3485.625,2055.421C3485.253,2055.858,3484.921,2056.217,3484.888,2056.217C3484.796,2056.217,3483.738,2054.785,3483.265,2054.019C3481.552,2051.247,3480.690,2048.356,3480.524,2044.833L3480.465,2043.563L3481.447,2043.563C3483.565,2043.562,3487.499,2043.227,3490.137,2042.822C3492.950,2042.391,3496.829,2041.488,3498.750,2040.819C3499.152,2040.679,3499.530,2040.561,3499.588,2040.557C3499.647,2040.554,3499.895,2040.948,3500.139,2041.433ZZM3512.196,2046.661C3513.985,2046.756,3517.047,2047.189,3517.231,2047.373C3517.254,2047.395,3517.189,2047.797,3517.088,2048.265C3516.216,2052.297,3513.828,2056.138,3510.568,2058.751C3510.223,2059.027,3509.929,2059.238,3509.916,2059.220C3509.902,2059.201,3509.744,2058.489,3509.566,2057.637C3508.972,2054.802,3508.016,2051.430,3506.978,2048.502C3506.715,2047.763,3506.501,2047.111,3506.501,2047.053C3506.501,2046.901,3508.179,2046.706,3510.463,2046.591C3510.581,2046.585,3511.361,2046.616,3512.196,2046.661ZZM3502.970,2047.895C3502.970,2047.910,3503.204,2048.559,3503.490,2049.337C3504.796,2052.886,3505.920,2057.047,3506.616,2060.919L3506.665,2061.188L3505.867,2061.504C3500.844,2063.490,3495.343,2063.225,3490.551,2060.766C3489.753,2060.356,3488.213,2059.378,3487.695,2058.952L3487.449,2058.750L3488.031,2058.064C3491.387,2054.109,3495.585,2050.901,3499.912,2048.986C3501.368,2048.342,3502.970,2047.771,3502.970,2047.895ZZ"
                  />
                </g>
              </g>
            </svg>
          </a>

          <a
            className="icon-container"
            href="https://linkedin.com/in/nusrynizam"
            target="_blank"
            title="LinkedIn"
          >
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
              height="44"
              id="screenshot-79a38716-577b-800a-8003-b97f88ae8aff"
              viewBox="3328 2022.333 44 44"
              fill="none"
              version="1.1"
            >
              <g id="shape-79a38716-577b-800a-8003-b97f88ae8aff">
                <g id="fills-79a38716-577b-800a-8003-b97f88ae8aff">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    rx="0"
                    ry="0"
                    d="M3336.582,2022.427C3332.462,2022.724,3329.426,2025.110,3328.446,2028.821C3328.043,2030.345,3328.000,2031.844,3328.000,2044.376C3328.000,2056.495,3328.046,2058.267,3328.397,2059.702C3328.805,2061.373,3329.935,2063.182,3331.221,2064.226C3332.742,2065.461,3334.427,2066.060,3336.859,2066.232C3338.758,2066.366,3361.320,2066.368,3363.191,2066.234C3363.958,2066.179,3364.943,2066.044,3365.381,2065.933C3367.104,2065.498,3368.936,2064.344,3369.943,2063.062C3371.150,2061.525,3371.729,2059.870,3371.898,2057.472C3372.033,2055.563,3372.034,2032.999,3371.900,2031.131C3371.838,2030.264,3371.708,2029.391,3371.556,2028.821C3370.756,2025.812,3368.503,2023.559,3365.501,2022.765C3364.921,2022.612,3364.055,2022.486,3363.141,2022.421C3361.428,2022.301,3338.270,2022.305,3336.582,2022.427ZZM3341.289,2031.505C3343.394,2032.588,3343.620,2035.527,3341.699,2036.849C3341.122,2037.246,3340.167,2037.495,3339.558,2037.407C3338.472,2037.251,3337.527,2036.552,3337.072,2035.570C3336.571,2034.488,3336.778,2033.179,3337.604,2032.197C3338.427,2031.218,3340.114,2030.902,3341.289,2031.505ZZM3358.661,2040.030C3360.172,2040.516,3361.633,2041.717,3362.282,2043.005C3362.480,2043.400,3362.766,2044.071,3362.917,2044.498L3363.191,2045.273L3363.252,2057.671L3357.873,2057.671L3357.815,2046.966L3357.580,2046.445C3356.995,2045.151,3355.572,2044.472,3353.966,2044.721C3352.472,2044.953,3351.528,2045.808,3351.146,2047.276C3351.022,2047.754,3350.996,2048.705,3350.996,2052.763L3350.996,2057.671L3345.742,2057.671L3345.686,2057.398C3345.655,2057.247,3345.638,2053.292,3345.649,2048.609L3345.669,2040.094L3350.697,2040.041L3350.697,2042.522L3351.214,2041.975C3352.120,2041.017,3353.319,2040.321,3354.729,2039.935C3355.681,2039.674,3357.707,2039.723,3358.661,2040.030ZZM3342.633,2057.671L3337.157,2057.671L3337.157,2040.044L3342.633,2040.044L3342.633,2057.671ZZ"
                  />
                </g>
              </g>
            </svg>
          </a>
          {/* <a
            className="icon-container"
            href="https://github.com/nusrynizam"
            target="_blank"
            title="Github"
          >
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="45"
              xmlns="http://www.w3.org/2000/svg"
              height="44"
              id="screenshot-79a38716-577b-800a-8003-b97f88ae8afc"
              viewBox="3402 2022.333 45 44"
              fill="none"
              version="1.1"
            >
              <g id="shape-79a38716-577b-800a-8003-b97f88ae8afc">
                <g id="fills-79a38716-577b-800a-8003-b97f88ae8afc">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    rx="0"
                    ry="0"
                    d="M3422.744,2022.415C3421.394,2022.506,3419.609,2022.826,3418.206,2023.231C3410.275,2025.517,3404.107,2032.193,3402.468,2040.266C3401.272,2046.155,3402.391,2052.198,3405.580,2057.073C3407.823,2060.501,3410.675,2063.116,3414.092,2064.876C3415.335,2065.516,3417.090,2066.231,3417.635,2066.318C3418.144,2066.400,3418.592,2066.154,3418.803,2065.678C3418.959,2065.324,3418.966,2065.149,3418.910,2063.158L3418.849,2061.019L3418.092,2061.137C3417.243,2061.268,3415.838,2061.221,3414.700,2061.022C3413.778,2060.861,3412.842,2060.395,3412.251,2059.804C3411.785,2059.336,3411.664,2059.133,3411.053,2057.781C3410.501,2056.560,3409.871,2055.750,3409.019,2055.166C3408.432,2054.763,3407.950,2054.236,3407.988,2054.038C3408.039,2053.775,3408.413,2053.658,3409.053,2053.705C3410.291,2053.796,3411.586,2054.701,3412.509,2056.119C3413.141,2057.090,3413.764,2057.694,3414.527,2058.072C3415.076,2058.345,3415.226,2058.379,3416.017,2058.409C3416.925,2058.443,3417.836,2058.305,3418.574,2058.023C3418.939,2057.883,3418.951,2057.866,3419.085,2057.272C3419.255,2056.516,3419.577,2055.825,3420.019,2055.265L3420.359,2054.834L3419.639,2054.733C3417.320,2054.406,3415.668,2053.839,3414.128,2052.841C3412.112,2051.535,3410.915,2049.501,3410.339,2046.404C3410.160,2045.440,3410.132,2042.978,3410.290,2042.072C3410.545,2040.604,3411.150,2039.258,3412.051,2038.150L3412.444,2037.666L3412.274,2037.117C3411.814,2035.637,3411.901,2033.849,3412.520,2032.070C3412.676,2031.624,3412.714,2031.606,3413.422,2031.642C3414.458,2031.696,3416.683,2032.590,3418.196,2033.561L3418.826,2033.966L3419.312,2033.870C3419.579,2033.818,3420.083,2033.713,3420.432,2033.638C3422.815,2033.122,3426.191,2033.122,3428.574,2033.638C3428.923,2033.713,3429.426,2033.816,3429.692,2033.867L3430.175,2033.959L3431.011,2033.451C3433.002,2032.238,3435.271,2031.424,3436.066,2031.637C3436.292,2031.698,3436.356,2031.788,3436.529,2032.295C3436.908,2033.400,3437.014,2034.145,3436.969,2035.389C3436.939,2036.227,3436.878,2036.693,3436.745,2037.103L3436.562,2037.666L3436.947,2038.139C3437.728,2039.100,3438.313,2040.288,3438.636,2041.572C3438.832,2042.352,3438.854,2045.243,3438.672,2046.360C3438.387,2048.104,3437.666,2049.935,3436.826,2051.043C3435.373,2052.959,3432.741,2054.267,3429.411,2054.727L3428.646,2054.832L3428.986,2055.264C3429.405,2055.795,3429.733,2056.475,3429.923,2057.209C3430.043,2057.672,3430.072,2058.416,3430.100,2061.641C3430.138,2065.953,3430.137,2065.946,3430.726,2066.226C3431.132,2066.419,3431.461,2066.360,3432.746,2065.863C3439.231,2063.354,3444.355,2057.651,3446.225,2050.860C3447.468,2046.346,3447.205,2041.105,3445.518,2036.759C3444.012,2032.881,3441.340,2029.341,3438.060,2026.879C3434.504,2024.209,3430.453,2022.703,3426.044,2022.409C3424.503,2022.307,3424.351,2022.307,3422.744,2022.415ZZ"
                  />
                </g>
              </g>
            </svg>
          </a> */}
          <div className="email">Email me at:<br /><span>nusry@pm.me</span></div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
