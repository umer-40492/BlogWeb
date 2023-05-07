import { useNavigate } from 'react-router-dom';
import '././Navbar.css';
const menudata = [
    { menuType: "Home"},
    { menuType: "About Us"},
    { menuType: "Services"},
    { menuType: "Blog"},
    { menuType: "Contact"},
  ]
  export let image = '/assets/Logo.svg';
export default function Navbar(props){
    const navigate = useNavigate();
    return(
        <nav style={{ backgroundColor: props.bgcolor }}>
           <div className='finlogo' onClick={()=>{
                  navigate('/');
                }}>
                  <svg width="122" height="28" viewBox="0 0 122 28" fill="none" style={{ fill: props.color }} xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.90595 4.662V10.2626C1.90595 11.1813 1.90595 12.2133 0 12.2133V13.7264V13.7468V15.2221C1.90595 15.2221 1.90595 16.2534 1.90595 17.1727V22.7728C1.90595 27.1192 4.28734 27.4347 8.33667 27.4347V24.0543C6.43072 24.0543 5.71666 23.7738 5.71666 22.6893V17.1442C5.71666 15.8637 5.80457 14.5262 4.68683 13.7171C5.80457 12.9092 5.71666 11.5716 5.71666 10.29V4.746C5.71666 3.66275 6.43131 3.381 8.33667 3.381V8.02092e-07C4.28734 -0.000581727 1.90595 0.315002 1.90595 4.662ZM12.6216 4.48058C11.5804 5.36025 11.0601 6.62375 11.0601 8.26992V9.74867H8.88507V12.8386H11.0601V24.0362H15.7864V12.8386H18.7144V9.74867H15.7864V8.694C15.7864 8.15733 15.9443 7.74375 16.2601 7.45325C16.5759 7.16275 17.0274 7.01808 17.6129 7.01808C17.9005 7.01808 19.3699 7.02275 19.3699 7.02275V3.437C19.3699 3.437 16.7463 3.40842 16.3713 3.40842C15.2303 3.40842 13.6628 3.59975 12.6216 4.48058ZM21.4487 7.00992H26.1756V3.437H21.4487V7.00992ZM21.4487 24.0368H26.1756V9.74867H21.4487V24.0368ZM37.8314 9.48442C36.9391 9.48442 36.1299 9.68508 35.4051 10.0852C34.6803 10.4854 34.0715 11.0431 33.5787 11.7553L33.3975 9.74867H28.9774V24.0362H33.6762V13.7637C33.9178 13.4995 34.2084 13.2913 34.5475 13.1431C34.8866 12.9949 35.2747 12.9185 35.7119 12.9185C36.4092 12.9185 36.9367 13.0883 37.2943 13.4266C37.652 13.7661 37.8314 14.3436 37.8314 15.1632V24.0374H42.5439V15.1766C42.5439 13.1956 42.1277 11.7518 41.2964 10.8448C40.4645 9.93767 39.3091 9.48442 37.8314 9.48442ZM56.7964 16.9919C55.9089 16.31 54.5442 15.7961 52.704 15.4531C51.533 15.2431 50.7538 15.0039 50.3687 14.7397C49.9829 14.4766 49.7898 14.154 49.7898 13.776C49.7898 13.3793 49.9572 13.0556 50.2915 12.7995C50.6258 12.544 51.0397 12.4157 51.5324 12.4157C52.2016 12.4157 52.6873 12.5615 52.9893 12.852C53.2913 13.1425 53.4426 13.5695 53.4426 14.1324H58.0158L58.0439 14.0537C58.1001 12.705 57.5332 11.6089 56.3431 10.759C55.153 9.90908 53.5538 9.48383 51.5462 9.48383C49.6402 9.48383 48.1302 9.9225 47.0143 10.7987C45.8989 11.6748 45.3415 12.7412 45.3415 13.9994C45.3415 15.1877 45.7877 16.1262 46.68 16.8122C47.5722 17.4994 48.8969 18.0052 50.6539 18.3312C51.7693 18.5512 52.5383 18.7997 52.9612 19.0767C53.3846 19.3544 53.5957 19.67 53.5957 20.02C53.5957 20.4517 53.433 20.7853 53.1077 21.0169C52.7823 21.2502 52.3039 21.3687 51.6718 21.3687C50.9099 21.3687 50.3214 21.2176 49.9082 20.9189C49.4943 20.6202 49.2784 20.1314 49.2599 19.4536H44.9935L44.966 19.5323C44.9104 20.748 45.4791 21.8487 46.674 22.834C47.8683 23.8204 49.4925 24.3127 51.5468 24.3127C53.5269 24.3127 55.1183 23.8968 56.3221 23.0644C57.5266 22.2326 58.1282 21.175 58.1282 19.8888C58.1282 18.6398 57.6839 17.6738 56.7964 16.9919ZM73.6198 18.0285H73.5361L71.0548 9.74983H68.0844L65.6306 18.0956H65.5469L63.8879 9.74983H59.5378L63.0931 24.0374H67.0677L69.5346 16.4582H69.6183L72.0727 24.0374H76.0604L79.602 9.74983H75.2519L73.6198 18.0285ZM87.6032 9.48433C85.3629 9.47567 83.64 10.1605 82.4367 11.5383C81.2317 12.9156 80.63 14.6918 80.63 16.8659V17.3682C80.63 19.3573 81.2927 21.0128 82.6161 22.3335C83.9408 23.6548 85.7146 24.3145 87.9363 24.3145C89.1354 24.3145 90.2579 24.1628 91.3038 23.8589C92.3492 23.5556 93.2026 23.1752 93.8617 22.7173L92.7469 19.9967C91.9288 20.3233 91.2524 20.5514 90.7178 20.6838C90.1825 20.8168 89.4691 20.8827 88.5768 20.8827C87.6935 20.8827 86.9878 20.6471 86.4579 20.1763C85.9275 19.7038 85.6123 19.1036 85.5094 18.3732L85.5381 18.2933H94.1541V15.9547C94.1541 13.9656 93.5728 12.39 92.4114 11.2274C91.2512 10.0654 89.6473 9.48433 87.6032 9.48433ZM89.5552 15.5068H85.4975L85.4556 15.4414C85.5304 14.6749 85.7373 14.063 86.077 13.6051C86.4155 13.1483 86.925 12.9191 87.6038 12.9191C88.273 12.9191 88.7646 13.1128 89.0821 13.5001C89.3979 13.8874 89.5564 14.4422 89.5564 15.1637L89.5552 15.5068ZM103.418 9.48433C101.177 9.47567 99.4557 10.1605 98.2513 11.5383C97.048 12.9156 96.4452 14.6918 96.4452 16.8659V17.3682C96.4452 19.3573 97.1078 21.0128 98.4325 22.3335C99.7577 23.6548 101.53 24.3145 103.751 24.3145C104.951 24.3145 106.074 24.1628 107.12 23.8589C108.166 23.5556 109.018 23.1752 109.678 22.7173L108.563 19.9967C107.745 20.3233 107.069 20.5514 106.534 20.6838C105.998 20.8168 105.285 20.8827 104.393 20.8827C103.51 20.8827 102.804 20.6471 102.274 20.1763C101.743 19.7038 101.428 19.1036 101.325 18.3732L101.353 18.2933H109.97V15.9547C109.97 13.9656 109.389 12.39 108.227 11.2274C107.065 10.0654 105.463 9.48433 103.418 9.48433ZM105.369 15.5068H101.313L101.271 15.4414C101.346 14.6749 101.552 14.063 101.891 13.6051C102.229 13.1483 102.739 12.9191 103.418 12.9191C104.087 12.9191 104.58 13.1128 104.897 13.5001C105.214 13.8874 105.371 14.4422 105.371 15.1637V15.5073H105.369V15.5068ZM119.652 20.3309C119.067 20.3309 118.615 20.1863 118.299 19.8958C117.984 19.6053 117.825 19.1905 117.825 18.6538V12.8637H120.277V9.77258H117.825V3.41425H113.099V9.77258H110.923V12.8637H113.099V19.0779C113.099 20.7241 113.619 21.9876 114.66 22.8684C115.7 23.7498 117.267 23.9406 118.41 23.9406C118.786 23.9406 121.409 23.912 121.409 23.912V20.3263C121.409 20.3263 119.941 20.3309 119.652 20.3309Z" fill="color: props.color"/>
                    </svg>
            </div>
            <div className="menu">
            {menudata.map((val) => {
            return (
                <h6 style={{ color: props.color }}>{val.menuType}</h6>
                )
            })}
            </div>
            <div className='copyright' style={{display: props.display}}>
                <p>@ Copyright Finsweet 2021</p>
            </div>
        </nav>
    )
};