using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class CatCardImagesModel
    {
        public int Id { get; set; }

        [Required]
        public string Url { get; set; } = string.Empty;

        public int CatCardId { get; set; }
        public CatCardModel? CatCard { get; set; }
    }
}
