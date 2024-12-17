using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class CatCardImages
    {
        public int Id { get; set; }

        [Required]
        public string Url { get; set; } = string.Empty;

        [Required]
        public int CatCardId { get; set; }
        public CatCard? CatCard { get; set; }
    }
}
