import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { usePage, Link, Head, useForm } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, movies }) {
    // const { auth } = usePage().props;

    const { delete: destroy, put } = useForm();

    return (
        <Authenticated auth={auth}>
            <Head title="Movie List" />
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton className="bg-alerange w-40 mb-8" type="button">
                    Insert movie
                </PrimaryButton>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    className="w-32 rounded-md"
                                    alt=""
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <PrimaryButton
                                        type="button"
                                        className="bg bg-yellow-500 w-60"
                                    >
                                        Edit
                                    </PrimaryButton>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        movie.deleted_at
                                            ? put(
                                                  route(
                                                      'admin.dashboard.movie.restore',
                                                      movie.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      'admin.dashboard.movie.destroy',
                                                      movie.id
                                                  )
                                              );
                                    }}
                                >
                                    <PrimaryButton
                                        type="button"
                                        className="bg bg-red-800 w-60"
                                    >
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </PrimaryButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
