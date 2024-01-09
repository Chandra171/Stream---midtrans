import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { usePage, Link } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage }) {
    // const { auth } = usePage().props;

    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton className="bg-alerange w-40 mb-8" type="button">
                    Insert movie
                </PrimaryButton>
            </Link>
            {flashMessage?.message && <FlashMessage message={flashMessage.message} />}
        </Authenticated>
    );
}
