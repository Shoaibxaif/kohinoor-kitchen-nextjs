import Container from "./Container";

function PageLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-cream">
            <Container>
                <div className="flex flex-col items-center">
                    <div
                        className="
              h-14
              w-14
              animate-spin
              rounded-full
              border-[3px]
              border-border
              border-t-accent
            "
                    />

                    <p
                        className="mt-6 text-lg text-muted"
                    >
                        Loading...
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default PageLoader;