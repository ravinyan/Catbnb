using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class Reviews
    {
        public int Id { get; set; }

        [Required]
        [StringLength(1000)]
        public string Review { get; set; } = string.Empty;

        [Required]
        [Range(1, 5)]
        public int StarRating { get; set; } = 1;

		[Required]
		public string StayTime { get; set; } = string.Empty;

		[Required]
        [DataType(DataType.Date)]
		public DateOnly DateSent {  get; set; }

		public int UserId { get; set; }
		public User? User { get; set; }

		public int BookingInfoId { get; set; }
        public BookingInfo? BookingInfo { get; set; }
    }
}