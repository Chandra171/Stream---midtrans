import Authenticated from "@/Layouts/Authenticated/Index";
import { useForm, Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
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

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert New Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        type="text"
                        name="name"
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
