const BackspaceIcon = ({ isKeyPressed }: { isKeyPressed: boolean }) => {
    return (
        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_1387_436" fill={isKeyPressed ? "#bfd8ff" : "white"}>
        <path d="M0 4C0 1.79086 1.79086 0 4 0H22C24.2091 0 26 1.79086 26 4V15C26 17.2091 24.2091 19 22 19H4C1.79086 19 0 17.2091 0 15V4Z"/>
        </mask>
        <path d="M0 4C0 1.79086 1.79086 0 4 0H22C24.2091 0 26 1.79086 26 4V15C26 17.2091 24.2091 19 22 19H4C1.79086 19 0 17.2091 0 15V4Z" fill={isKeyPressed ? "#bfd8ff" : "white"}/>
        <path d="M-1 4C-1 1.23858 1.23858 -1 4 -1H22C24.7614 -1 27 1.23858 27 4H25C25 2.34315 23.6569 1 22 1H4C2.34315 1 1 2.34315 1 4H-1ZM27 16C27 18.7614 24.7614 21 22 21H4C1.23858 21 -1 18.7614 -1 16L1 15C1 16.1046 2.34315 17 4 17H22C23.6569 17 25 16.1046 25 15L27 16ZM4 21C1.23858 21 -1 18.7614 -1 16V4C-1 1.23858 1.23858 -1 4 -1V1C2.34315 1 1 2.34315 1 4V15C1 16.1046 2.34315 17 4 17V21ZM22 -1C24.7614 -1 27 1.23858 27 4V16C27 18.7614 24.7614 21 22 21V17C23.6569 17 25 16.1046 25 15V4C25 2.34315 23.6569 1 22 1V-1Z" fill="#283044" mask="url(#path-1-inside-1_1387_436)"/>
        <path d="M18 9H8M8 9L10.75 11.75M8 9L10.75 6.25" stroke="#283044" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}

export default BackspaceIcon;
