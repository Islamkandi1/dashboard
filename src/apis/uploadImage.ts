import supabase from "../../supabase-client";

  // handle uploade images=======================================================
  async function uploadImage(file: File) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fileName = `${Date.now()}_${file.name}`;
    const { error } = await supabase
      .storage
      .from('products')
      .upload(fileName, file);

    if (error) {
      console.log(error);
      return null;
    }

    const { data } = supabase
      .storage
      .from('products')
      .getPublicUrl(fileName);
    const publicUrl = data?.publicUrl ?? null;
    return publicUrl;
  }
  export default uploadImage