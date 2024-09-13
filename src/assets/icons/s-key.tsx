const SKeyIcon = ({ isKeyPressed }: { isKeyPressed: boolean }) => {    
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_356_1098" fill={isKeyPressed ? "#bfd8ff" : "white"}>
        <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V15C18 17.2091 16.2091 19 14 19H4C1.79086 19 0 17.2091 0 15V4Z"/>
        </mask>
        <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V15C18 17.2091 16.2091 19 14 19H4C1.79086 19 0 17.2091 0 15V4Z" fill={isKeyPressed ? "#bfd8ff" : "white"}/>
        <path d="M-1 4C-1 1.23858 1.23858 -1 4 -1H14C16.7614 -1 19 1.23858 19 4H17C17 2.34315 15.6569 1 14 1H4C2.34315 1 1 2.34315 1 4H-1ZM19 16C19 18.7614 16.7614 21 14 21H4C1.23858 21 -1 18.7614 -1 16L1 15C1 16.1046 2.34315 17 4 17H14C15.6569 17 17 16.1046 17 15L19 16ZM4 21C1.23858 21 -1 18.7614 -1 16V4C-1 1.23858 1.23858 -1 4 -1V1C2.34315 1 1 2.34315 1 4V15C1 16.1046 2.34315 17 4 17V21ZM14 -1C16.7614 -1 19 1.23858 19 4V16C19 18.7614 16.7614 21 14 21V17C15.6569 17 17 16.1046 17 15V4C17 2.34315 15.6569 1 14 1V-1Z" fill="#283044" mask="url(#path-1-inside-1_356_1098)"/>
        <path d="M7 11.5L7.03137 11.5314C7.33143 11.8314 7.7384 12 8.16274 12L9.5 12C10.3284 12 11 11.3284 11 10.5V10.5C11 9.67157 10.3284 9 9.5 9L8.5 9C7.67157 9 7 8.32843 7 7.5V7.5C7 6.67157 7.67157 6 8.5 6L9.83726 6C10.2616 6 10.6686 6.16857 10.9686 6.46863L11 6.5" stroke="#283044" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default SKeyIcon;
