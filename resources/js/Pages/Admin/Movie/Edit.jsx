import Authenticated from "@/Layouts/Authenticated/Index";
import { useForm, Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ auth, movie }) {
    const { data, setData, put, processing, errors } = useForm({
        ...movie
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.thumbnail === movie.thumbnail){
            delete data.thumbnail;
        }

        put(route("admin.dashboard.movie.update", movie.id), {
            ...data
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Update Movie {movie.name}</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        type="text"
                        name="name"
                        defaultValue={movie.name}
                        variant="primary-outline bg-white"
                        handleChange={onHandleChange}
                        placeholder="Enter The Movie Name"
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="category"
                        value="Category"
                        className="mt-4"
                    />
                    <TextInput
                        type="text"
                        name="category"
                        defaultValue={movie.category}
                        variant="primary-outline bg-white"
                        handleChange={onHandleChange}
                        placeholder="Enter The Movie Category"
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="video_url"
                        value="Video Url"
                        className="mt-4"
                    />
                    <TextInput
                        type="text"
                        name="video_url"
                        defaultValue={movie.video_url}
                        variant="primary-outline bg-white"
                        handleChange={onHandleChange}
                        placeholder="Enter The Movie URL"
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="thumbnail"
                        value="Thumbnail"
                        className="mt-4"
                    />
                    <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40" />
                    <TextInput
                        type="file"
                        name="thumbnail"
                        variant="primary-outline bg-white"
                        handleChange={onHandleChange}
                        placeholder="Enter The Movie Thumbnail"
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="rating"
                        value="Rating"
                        className="mt-4"
                    />
                    <TextInput
                        type="text"
                        name="rating"
                        defaultValue={movie.rating}
                        variant="primary-outline bg-white"
                        handleChange={onHandleChange}
                        placeholder="Enter The Movie Rating"
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div className="flex flex-row mt-2 items-center">
                    <InputLabel
                        htmlFor="is_featured"
                        value="Is Featured"
                        className="mr-3"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(event) =>
                            setData("is_featured", event.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    className="mt-4 bg-alerange w-40 float-right"
                    disabled={processing}
                >
                    {" "}
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
