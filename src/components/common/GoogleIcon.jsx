function GoogleIcon({ size = 20, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
            aria-hidden="true"
        >
            <path
                fill="#4285F4"
                d="M23.52 12.27c0-.82-.07-1.62-.2-2.4H12v4.55h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.58-5.17 3.58-8.78Z"
            />
            <path
                fill="#34A853"
                d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3a7.4 7.4 0 0 1-11-3.9H1.08v3.09A12 12 0 0 0 12 24Z"
            />
            <path
                fill="#FBBC05"
                d="M5.07 14.2a7.2 7.2 0 0 1 0-4.6V6.51H1.08a12 12 0 0 0 0 10.78z"
            />
            <path
                fill="#EA4335"
                d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.08 6.51l3.99 3.09A7.15 7.15 0 0 1 12 4.77Z"
            />
        </svg>
    );
}

export default GoogleIcon;
