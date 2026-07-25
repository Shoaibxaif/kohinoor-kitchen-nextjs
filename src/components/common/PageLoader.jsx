import Container from "./Container";

function PageLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f7f5f0]">
            <Container>
                <div className="flex flex-col items-center">
                    <div
                        className="
              h-14
              w-14
              animate-spin
              rounded-full
              border-[3px]
              border-[#e8e4dc]
              border-t-[#C8A97A]
            "
                    />

                    <p
                        className="mt-6 text-lg text-[#6b6b66]"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Loading...
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default PageLoader;