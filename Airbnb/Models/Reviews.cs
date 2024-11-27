using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class Reviews
    {
        public int Id { get; set; }

        [Required]
        public User User { get; set; } = new User();

        [Required]
        public string Review { get; set; } = string.Empty;

        [Required]
        [Range(0, 6)]
        public decimal StarRating { get; set; } = 0;
    }
}