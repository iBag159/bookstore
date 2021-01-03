import React, { Fragment } from "react";

class Icon {
    constructor(viewBox, svg) {
        this.viewBox = viewBox;
        this.svg = <Fragment>{svg}</Fragment>;
    }
}

const svgs = {
    youtube: new Icon(
        "0 0 512 512",
        (
            <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z" />
        )
    ),
    facebook: new Icon(
        "0 0 96.124 96.123",
        (
            <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" />
        )
    ),
    twitter: new Icon(
        "0 0 612 612",
        (
            <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" />
        )
    ),
    user: new Icon(
        "0 0 512 512",
        (
           <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
			C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
			c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
			h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
			c59.551,0,108,48.448,108,108S315.551,256,256,256z" />
        )
    ),
    bag: new Icon(
        "0 0 217.791 217.791",
        (
            <React.Fragment>
                <path d="M187.129,0H36.465c-7.864,0-14.667,6.122-15.49,13.951L1.332,201.979
                c-0.43,4.081,0.871,8.127,3.556,11.11c2.691,2.989,6.587,4.702,10.693,4.702h186.465c4.052,0,7.936-1.677,10.651-4.6c2.715-2.924,4.105-6.922,3.801-10.961L202.47,14.237C201.873,6.253,195.136,0,187.129,0z M19.549,199.89l19.01-181.99h146.224
                l13.587,181.99H19.549z"/>
                <path d="M148.344,35.055c-7.817,0-14.171,6.355-14.171,14.171c0,6.79,4.803,12.471,11.188,13.843c-0.591,9.887-3.055,24.482-11.868,33.79c-6.009,6.343-14.315,9.356-24.584,9.052c-10.358-0.346-18.73-3.998-24.876-10.86c-8.175-9.105-11.122-22.256-12.131-32.102c6.188-1.522,10.806-7.077,10.806-13.724c0-7.817-6.355-14.171-14.171-14.171S54.366,41.41,54.366,49.227c0,6.904,4.97,12.656,11.522,13.903C66.932,73.876,70.16,88.513,79.57,99.02c7.28,8.127,17.083,12.459,29.142,12.859c0.597,0.018,1.187,0.03,1.778,0.03c11.277,0,20.478-3.682,27.352-10.961c10.233-10.824,12.942-27.102,13.533-37.896c6.355-1.396,11.134-7.059,11.134-13.825C162.515,41.41,156.161,35.055,148.344,35.055z M60.333,49.227c0-4.523,3.682-8.204,8.204-8.204c4.523,0,8.204,3.682,8.204,8.204c0,3.485-2.196,6.45-5.269,7.638c-0.167-4.427,0.036-7.315,0.042-7.411c0.125-1.641-1.104-3.079-2.745-3.198c-1.683-0.167-3.079,1.104-3.204,2.745c-0.03,0.382-0.233,3.377-0.09,7.823C62.469,55.605,60.333,52.664,60.333,49.227z M151.519,56.787c-0.036-2.745-0.173-4.559-0.203-4.845c-0.149-1.641-1.617-2.828-3.234-2.703c-1.641,0.143-2.852,1.599-2.709,3.234c0.006,0.072,0.137,1.754,0.155,4.427c-3.133-1.152-5.388-4.141-5.388-7.673c0-4.523,3.682-8.204,8.204-8.204s8.204,3.682,8.204,8.204C156.549,52.622,154.472,55.546,151.519,56.787z"/>
            </React.Fragment>
        )
    ),
    favorites: new Icon(
        "-50 0 511 512",
        (
            <React.Fragment>
                <path d="m365.964844 0h-320.464844c-24.8125 0-45 20.1875-45 45v422c0 24.8125 20.1875 45 45 45h320.46875c24.8125 0 45-20.1875 45-45v-422c-.003906-24.8125-20.191406-45-45.003906-45zm15 467c0 8.269531-6.726563 15-15 15h-320.464844c-8.269531 0-15-6.730469-15-15v-422c0-8.269531 6.730469-15 15-15h320.46875c8.269531 0 15 6.730469 15 15v422zm0 0"/><path d="m205.730469 201.890625c4.136719 0 8.089843-1.710937 10.925781-4.722656l41.398438-44.015625c.125-.132813.246093-.265625.363281-.402344 6.386719-6.964844 13.566406-16.675781 13.449219-30.292969-.191407-21.164062-16.851563-38.796875-37.929688-40.148437-10.523438-.671875-20.535156 2.675781-28.296875 9.019531-7.105469-5.722656-16.078125-9.039063-25.472656-9.039063-22.371094 0-40.570313 18.199219-40.570313 40.570313 0 13.65625 7.949219 23.285156 13.210938 29.65625.207031.25.421875.492187.644531.730469l41.351563 43.925781c2.835937 3.011719 6.789062 4.71875 10.925781 4.71875zm-25.5625-89.601563c4.109375 0 7.765625 2.308594 9.542969 6.019532 2.941406 6.148437 9.226562 10.113281 16.023437 10.113281h.039063c6.890624-.015625 13.011718-3.902344 15.964843-10.140625 1.867188-3.941406 5.902344-6.304688 10.285157-6.03125 5.378906.34375 9.796874 5.042969 9.84375 10.472656.019531 2.285156-.9375 4.75-5.761719 9.972656-.054688.058594-.109375.117188-.160157.175782l-30.222656 32.132812-30.089844-31.964844c-2.769531-3.355468-6.035156-7.410156-6.035156-10.175781 0-5.832031 4.742188-10.574219 10.570313-10.574219zm0 0"/><path d="m313.265625 244h-137.847656c-8.285157 0-15 6.714844-15 15s6.714843 15 15 15h137.847656c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0"/><path d="m137.117188 259c0 13.507812-10.949219 24.460938-24.460938 24.460938-13.507812 0-24.457031-10.953126-24.457031-24.460938s10.949219-24.460938 24.457031-24.460938c13.511719 0 24.460938 10.953126 24.460938 24.460938zm0 0"/><path d="m313.265625 320h-137.847656c-8.285157 0-15 6.714844-15 15s6.714843 15 15 15h137.847656c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0"/><path d="m137.117188 335c0 13.507812-10.949219 24.460938-24.460938 24.460938-13.507812 0-24.457031-10.953126-24.457031-24.460938s10.949219-24.460938 24.457031-24.460938c13.511719 0 24.460938 10.953126 24.460938 24.460938zm0 0"/><path d="m313.265625 396h-137.847656c-8.285157 0-15 6.714844-15 15s6.714843 15 15 15h137.847656c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0"/><path d="m137.117188 411c0 13.507812-10.949219 24.460938-24.460938 24.460938-13.507812 0-24.457031-10.953126-24.457031-24.460938s10.949219-24.460938 24.457031-24.460938c13.511719 0 24.460938 10.953126 24.460938 24.460938zm0 0"/>
            </React.Fragment>
        )
    ),
    search: new Icon(
        "0 0 612.01 612.01",
        (
            <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407S377.82,467.8,257.493,467.8z"/>
        )
    ),
    default: null,
};
export default svgs;
