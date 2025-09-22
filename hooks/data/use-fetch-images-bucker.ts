import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export function useFetchBucketImages(bucketName: string, folder?: string) {
  return useQuery({
    queryKey: ["bucket-images", bucketName, folder],
    queryFn: async () => {
      // List all files in the bucket
      const { data: files, error } = await supabase.storage
        .from(bucketName)
        .list(folder, {
          limit: 100,
          sortBy: { column: "name", order: "asc" },
        });
      if (error) throw error;

      const imageUrls = files.map((file) => {
        const filePath = folder ? `${folder}/${file.name}` : file.name;
        const { data } = supabase.storage
          .from(bucketName)
          .getPublicUrl(filePath);

        return {
          fileName: file.name,
          url: data.publicUrl,
          size: file.metadata?.size || 0,
        };
      });
      return imageUrls;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}
