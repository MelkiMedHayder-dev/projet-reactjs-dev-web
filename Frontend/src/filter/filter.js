import "./filter.css";
import { useState } from "react";

function Filter({ onFilterChange }) {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (icon) => {
        const newSelectedIcon = selectedIcon === icon ? null : icon;
        setSelectedIcon(newSelectedIcon);
        onFilterChange(newSelectedIcon);
    };

    const svgs = {
        livingroom: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/sofa-01-solid-sharp.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99939 20.25V17.25H5.99939V20.25H3.99939ZM17.9994 20.25V17.25H19.9994V20.25H17.9994Z" fill="red"></path>
<path d="M20.75 9.5C19.6454 9.5 18.75 10.3954 18.75 11.5V14.5H5.25V11.5C5.25 10.3954 4.35457 9.5 3.25 9.5C2.14543 9.5 1.25 10.3954 1.25 11.5C1.25 12.2403 1.6522 12.8866 2.25 13.2324V17.5H21.75V13.2324C22.3478 12.8866 22.75 12.2403 22.75 11.5C22.75 10.3954 21.8546 9.5 20.75 9.5Z" fill="#8ebbff"></path>
<path d="M3.25061 8.5V6.5C3.25061 4.98122 4.48183 3.75 6.00061 3.75H18.0006C19.5194 3.75 20.7506 4.98122 20.7506 6.5V8.5C20.7506 8.5 20.7506 8.5 20.7506 8.5C19.0938 8.5 17.7506 9.84315 17.7506 11.5V13.5H6.25061V11.5C6.25061 9.84315 4.90746 8.5 3.25061 8.5Z" fill="#8ebbff"></path>
</svg>`,
        kitchen : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/kitchen-utensils-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
<path d="M8.82295 3.03796C8.62492 2.83109 8.36369 2.70546 8.14827 2.62402C7.91665 2.53645 7.65253 2.46899 7.37963 2.41692C6.8325 2.31251 6.18286 2.25738 5.54291 2.25089C4.90347 2.24441 4.24471 2.28619 3.68085 2.38786C3.39926 2.43863 3.12413 2.50736 2.87972 2.60092C2.64634 2.69026 2.38158 2.8243 2.17705 3.03796C1.83111 3.39934 1.74921 3.83476 1.75001 4.23584C1.75071 4.59363 1.81939 5.02872 1.89353 5.49846L2.35964 8.45449C2.47431 9.18169 2.66335 9.87704 3.23864 10.3076C3.52625 10.5229 3.86494 10.6344 4.2259 10.6915C4.37925 10.7158 4.49805 10.8438 4.49805 10.999L4.49805 20.7502C4.49805 21.3025 4.94576 21.7502 5.49805 21.7502C6.05033 21.7502 6.49805 21.3025 6.49805 20.7502L6.49805 10.9996C6.49805 10.8442 6.61698 10.7163 6.77045 10.6921C7.13277 10.6351 7.47278 10.5236 7.76136 10.3076C8.33665 9.87704 8.52569 9.18169 8.64036 8.45449L9.10647 5.49846C9.18061 5.02872 9.24928 4.59363 9.24999 4.23584C9.25079 3.83476 9.16889 3.39934 8.82295 3.03796Z" fill="#8ebbff"></path>
<path d="M13.5 3.25012C13.5 2.69784 13.0523 2.25012 12.5 2.25012C11.9477 2.25012 11.5 2.69784 11.5 3.25012L11.5 13.1628C11.5 13.297 11.4104 13.4138 11.2836 13.458C10.7383 13.6481 10.2558 13.9547 9.86648 14.3187C9.21976 14.9233 8.75 15.7652 8.75 16.6251C8.75 17.6614 9.13706 18.8903 9.74138 19.8643C10.3238 20.803 11.2698 21.7501 12.5 21.7501C13.7302 21.7501 14.6762 20.803 15.2586 19.8643C15.8629 18.8903 16.25 17.6614 16.25 16.6251C16.25 15.7652 15.7802 14.9233 15.1335 14.3187C14.7442 13.9547 14.2617 13.6481 13.7164 13.458C13.5896 13.4138 13.5 13.297 13.5 13.1628L13.5 3.25012Z" fill="#8ebbff"></path>
<path d="M18.7477 2.29233C18.5183 2.21206 18.2642 2.24794 18.066 2.38858C17.8678 2.52923 17.75 2.7572 17.75 3.00025V20.7502C17.75 21.3025 18.1977 21.7502 18.75 21.7502C19.3023 21.7502 19.75 21.3025 19.75 20.7502L19.75 15.0852C19.75 14.9073 19.75 14.8184 19.7872 14.7509C19.8143 14.7017 19.8552 14.6606 19.9043 14.6333C19.9717 14.5959 20.0603 14.5955 20.2374 14.5948C20.5798 14.5935 20.94 14.5921 21.2682 14.5623C21.5942 14.5327 21.9545 14.4705 22.2799 14.311C22.6295 14.1396 22.9245 13.8621 23.0945 13.4525C23.2542 13.0678 23.2775 12.6294 23.2244 12.1657L22.6023 6.73576C22.3425 4.46826 20.7743 3.00143 18.7477 2.29233Z" fill="#8ebbff"></path>
</svg>`,
        bathroom : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/bathtub-01-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 19.7929C7.09763 20.1834 7.09763 20.8166 6.70711 21.2071L5.70711 22.2071C5.31658 22.5976 4.68342 22.5976 4.29289 22.2071C3.90237 21.8166 3.90237 21.1834 4.29289 20.7929L5.29289 19.7929C5.68342 19.4024 6.31658 19.4024 6.70711 19.7929ZM17.2929 19.7929C17.6834 19.4024 18.3166 19.4024 18.7071 19.7929L19.7071 20.7929C20.0976 21.1834 20.0976 21.8166 19.7071 22.2071C19.3166 22.5976 18.6834 22.5976 18.2929 22.2071L17.2929 21.2071C16.9024 20.8166 16.9024 20.1834 17.2929 19.7929Z" fill="#8ebbff"></path>
<path d="M2 13.5H2.25V13.5557C2.24998 15.1583 2.24997 16.4373 2.38483 17.4404C2.52415 18.4767 2.81966 19.3301 3.4948 20.0052C4.16994 20.6803 5.02335 20.9758 6.05961 21.1152C7.0627 21.25 8.34166 21.25 9.94426 21.25H14.0557C15.6583 21.25 16.9373 21.25 17.9404 21.1152C18.9767 20.9758 19.8301 20.6803 20.5052 20.0052C21.1803 19.3301 21.4758 18.4767 21.6152 17.4404C21.75 16.4373 21.75 15.1583 21.75 13.5557V13.5H22C22.5523 13.5 23 13.0523 23 12.5C23 11.9477 22.5523 11.5 22 11.5H2C1.44772 11.5 1 11.9477 1 12.5C1 13.0523 1.44772 13.5 2 13.5Z" fill="#8ebbff"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5234 4.5C5.68205 4.5 5 5.18205 5 6.0234V12.5C5 13.0523 4.55228 13.5 4 13.5C3.44772 13.5 3 13.0523 3 12.5V6.0234C3 4.07748 4.57748 2.5 6.5234 2.5C7.72016 2.5 8.80751 3.1037 9.44933 4.05991L9.87531 3.71913C10.3066 3.37412 10.9359 3.44404 11.2809 3.8753C11.6259 4.30657 11.556 4.93586 11.1247 5.28087L8.62469 7.28087C8.19343 7.62588 7.56414 7.55596 7.21913 7.12469C6.87412 6.69343 6.94404 6.06414 7.37531 5.71913L7.87464 5.31967C7.61619 4.82307 7.09907 4.5 6.5234 4.5Z" fill="#8ebbff"></path>
</svg>`,
        bedroom : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/bed-double-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 17.4932V20.749C22.75 21.3013 22.3023 21.749 21.75 21.749C21.1977 21.749 20.75 21.3013 20.75 20.749V18.2432L3.25 18.2432L3.25 20.749C3.25 21.3013 2.80229 21.749 2.25 21.749C1.69772 21.749 1.25 21.3013 1.25 20.749L1.25 17.2422C1.25 17.2414 1.25 17.2406 1.25 17.2398L1.25 15.948V15.948V15.9479C1.24997 15.0495 1.24995 14.3003 1.32992 13.7055C1.41432 13.0777 1.59999 12.5109 2.05546 12.0555C2.51093 11.6 3.07773 11.4143 3.70552 11.3299C4.3003 11.25 5.04951 11.25 5.94797 11.25H5.948L18.052 11.25H18.052C18.9505 11.25 19.6997 11.25 20.2945 11.3299C20.9223 11.4143 21.4891 11.6 21.9445 12.0555C22.4 12.5109 22.5857 13.0777 22.6701 13.7055C22.7501 14.3003 22.75 15.0495 22.75 15.948V17.2422V17.4932Z" fill="#8ebbff"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.15909C9.35272 4.15909 6.91011 4.87401 4.91309 6.08126C4.62971 6.25257 4.48172 6.34352 4.37606 6.42411C4.29454 6.48628 4.2719 6.51766 4.25313 6.54889C4.25287 6.54934 4.25259 6.5498 4.25229 6.55028C4.24506 6.56216 4.22976 6.5873 4.21777 6.6918C4.20184 6.8306 4.20045 7.01659 4.20045 7.36691V11.7955C4.20045 12.3226 3.76395 12.75 3.22551 12.75C2.68706 12.75 2.25056 12.3226 2.25056 11.7955V7.36691C2.25056 7.32711 2.25042 7.28702 2.25028 7.24667C2.24842 6.70826 2.24639 6.12359 2.57252 5.58084C2.88547 5.06003 3.35046 4.78051 3.79845 4.51121C3.82862 4.49307 3.85871 4.47498 3.88868 4.45687C6.19615 3.06193 8.99392 2.25 12 2.25C15.0061 2.25 17.8039 3.06193 20.1113 4.45687C20.1413 4.47498 20.1714 4.49307 20.2016 4.51121C20.6495 4.78051 21.1145 5.06003 21.4275 5.58084C21.7536 6.12359 21.7516 6.70827 21.7497 7.24667C21.7496 7.28702 21.7494 7.32711 21.7494 7.36691V11.7955C21.7494 12.3226 21.3129 12.75 20.7745 12.75C20.236 12.75 19.7995 12.3226 19.7995 11.7955V7.36691C19.7995 7.01659 19.7982 6.8306 19.7822 6.6918C19.7702 6.5873 19.7549 6.56216 19.7477 6.55027L19.7469 6.54889C19.7281 6.51766 19.7055 6.48628 19.6239 6.42411C19.5183 6.34352 19.3703 6.25257 19.0869 6.08126C17.0899 4.87401 14.6473 4.15909 12 4.15909Z" fill="#8ebbff"></path>
<path d="M6.00846 8.88779C6.69241 8.53761 7.551 8.25 8.5 8.25C9.449 8.25 10.3076 8.53762 10.9915 8.88779C11.1861 8.9874 11.4418 9.14672 11.6005 9.45247C11.7426 9.72642 11.75 10.0177 11.75 10.2134V12.75H5.25V10.2134C5.25 10.0177 5.25737 9.72642 5.39951 9.45247C5.55816 9.14672 5.81389 8.9874 6.00846 8.88779Z" fill="#8ebbff"></path>
<path d="M13.0085 8.88779C13.6924 8.53761 14.551 8.25 15.5 8.25C16.449 8.25 17.3076 8.53762 17.9915 8.88779C18.1861 8.9874 18.4418 9.14672 18.6005 9.45247C18.7426 9.72642 18.75 10.0177 18.75 10.2134V12.75H12.25V10.2134C12.25 10.0177 12.2574 9.72642 12.3995 9.45247C12.5582 9.14672 12.8139 8.9874 13.0085 8.88779Z" fill="#8ebbff"></path>
</svg>`,
        garden : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/tree-02-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C8.76146 1.25 6.5449 3.63576 6.27807 6.51249C3.94371 7.2444 2.25 9.42369 2.25 12C2.25 15.1756 4.82436 17.75 8 17.75H11.25V13.3107L8.96967 11.0303C8.67678 10.7374 8.67678 10.2626 8.96967 9.96967C9.26256 9.67678 9.73744 9.67678 10.0303 9.96967L11.25 11.1893V9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13.1893L13.9697 11.9697C14.2626 11.6768 14.7374 11.6768 15.0303 11.9697C15.3232 12.2626 15.3232 12.7374 15.0303 13.0303L12.75 15.3107V17.75H16C19.1756 17.75 21.75 15.1756 21.75 12C21.75 9.42369 20.0563 7.2444 17.7219 6.51249C17.4551 3.63576 15.2385 1.25 12 1.25Z" fill="#8ebbff"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 17.75V21.25H10C9.58579 21.25 9.25 21.5858 9.25 22C9.25 22.4142 9.58579 22.75 10 22.75H14C14.4142 22.75 14.75 22.4142 14.75 22C14.75 21.5858 14.4142 21.25 14 21.25H12.75V17.75H11.25Z" fill="#8ebbff"></path>
</svg>`,
        garage : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/garage-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.052 10.25C13.9505 10.25 14.6997 10.2499 15.2945 10.3299C15.9223 10.4143 16.4891 10.6 16.9445 11.0555C17.4 11.5109 17.5857 12.0777 17.6701 12.7055C17.7169 13.0536 17.7363 13.4545 17.7443 13.9073C17.7481 13.9377 17.75 13.9686 17.75 14C17.75 14.0238 17.7489 14.0473 17.7467 14.0705C17.75 14.345 17.75 14.6375 17.75 14.9478V14.948V14.948L17.75 22.144C17.75 22.4308 17.75 22.5742 17.8412 22.6626C17.9324 22.751 18.073 22.7466 18.3544 22.7379C18.7021 22.7271 19.0163 22.7067 19.2965 22.6683C19.9271 22.5818 20.4951 22.3912 20.9499 21.927C21.4027 21.465 21.5865 20.8916 21.6704 20.2553C21.7501 19.6503 21.75 18.8874 21.75 17.9689V10.9546V10.9545C21.75 10.1815 21.75 9.5511 21.7025 9.03117C21.653 8.48866 21.5483 8.01296 21.3092 7.55717C21.0699 7.10071 20.7389 6.74627 20.3219 6.40147C19.9234 6.07188 19.4084 5.72153 18.779 5.29328L14.6079 2.45528L14.6079 2.45524L14.6078 2.45521L14.6078 2.45518L14.6077 2.45513C14.098 2.10831 13.666 1.81433 13.2849 1.61199C12.8794 1.39671 12.4697 1.25 12 1.25C11.5303 1.25 11.1206 1.39671 10.7151 1.61199C10.334 1.81436 9.90187 2.10838 9.39208 2.45527L5.22102 5.29326L5.221 5.29328C4.59157 5.72153 4.07664 6.07188 3.67808 6.40147C3.26114 6.74627 2.93012 7.10071 2.69076 7.55717C2.45175 8.01296 2.34705 8.48866 2.29749 9.03117C2.24999 9.5511 2.24999 10.1815 2.25 10.9545V10.9545L2.25 17.9689V17.9689C2.24997 18.8874 2.24995 19.6503 2.32965 20.2553C2.41347 20.8916 2.59735 21.465 3.05008 21.927C3.5049 22.3912 4.07288 22.5818 4.7035 22.6683C4.98366 22.7067 5.29794 22.7271 5.64565 22.7379C5.92698 22.7466 6.06764 22.751 6.15882 22.6626C6.25 22.5742 6.25 22.4308 6.25 22.144L6.25 18.0012L6.25 18L6.25 17.9988L6.25 14.948V14.948V14.9479V14.9479C6.24999 14.6376 6.24998 14.345 6.25327 14.0705C6.25111 14.0473 6.25 14.0238 6.25 14C6.25 13.9686 6.25193 13.9376 6.25568 13.9073C6.26372 13.4545 6.28312 13.0536 6.32991 12.7055C6.41432 12.0777 6.59999 11.5109 7.05546 11.0555C7.51093 10.6 8.07773 10.4143 8.70552 10.3299C9.3003 10.2499 10.0495 10.25 10.948 10.25H10.948H13.052H13.052ZM8.35 22.75C8.06716 22.75 7.92574 22.75 7.83787 22.6621C7.75 22.5743 7.75 22.4328 7.75 22.15V19.35C7.75 19.0672 7.75 18.9257 7.83787 18.8379C7.92574 18.75 8.06716 18.75 8.35 18.75H15.65C15.9328 18.75 16.0743 18.75 16.1621 18.8379C16.25 18.9257 16.25 19.0672 16.25 19.35V22.15C16.25 22.4328 16.25 22.5743 16.1621 22.6621C16.0743 22.75 15.9328 22.75 15.65 22.75H8.35ZM16.25 16.65C16.25 16.9328 16.25 17.0743 16.1621 17.1621C16.0743 17.25 15.9328 17.25 15.65 17.25H8.35C8.06716 17.25 7.92574 17.25 7.83787 17.1621C7.75 17.0743 7.75 16.9328 7.75 16.65V15C7.75005 14.8619 7.862 14.75 8.00009 14.75L15.9999 14.75C16.138 14.75 16.25 14.8619 16.25 15V16.65ZM8.12857 13.25C8.11193 13.25 8.10361 13.25 8.09399 13.2494C7.93477 13.2391 7.80289 13.0883 7.81396 12.9292C7.81463 12.9196 7.81527 12.9148 7.81654 12.9054C7.87858 12.4439 7.9858 12.2464 8.11612 12.1161C8.24644 11.9858 8.44393 11.8786 8.9054 11.8165C9.38843 11.7516 10.036 11.75 11 11.75H13C13.964 11.75 14.6116 11.7516 15.0946 11.8165C15.5561 11.8786 15.7536 11.9858 15.8839 12.1161C16.0142 12.2464 16.1214 12.4439 16.1835 12.9054C16.1847 12.9148 16.1854 12.9196 16.186 12.9292C16.1971 13.0883 16.0652 13.2391 15.906 13.2494C15.8964 13.25 15.8881 13.25 15.8714 13.25L8.12857 13.25ZM12.0078 8C12.5601 8 13.0078 7.55228 13.0078 7C13.0078 6.44771 12.5601 6 12.0078 6H11.9988C11.4465 6 10.9988 6.44771 10.9988 7C10.9988 7.55228 11.4465 8 11.9988 8H12.0078Z" fill="#8ebbff"></path>
</svg>`
    };

    return (
        <div className="filter-wrapper">
            <div className="filter">
                {["livingroom", "kitchen", "bathroom", "bedroom", "garden", "garage"].map((item) => (
                    <div
                        key={item}
                        className={`filter-content ${selectedIcon === item ? "selected" : ""}`}
                        onClick={() => handleIconClick(item)}
                    >
                        <div dangerouslySetInnerHTML={{ __html: svgs[item] }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;
