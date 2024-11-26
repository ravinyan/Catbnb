using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class ReviewsModel
    {
        public int Id { get; set; }

        [Required]
        public UserModel User { get; set; } = new UserModel();

        [Required]
        public string Review { get; set; } = string.Empty;

        [Required]
        [Range(0, 6)]
        public decimal StarRating { get; set; } = 0;
    }
}