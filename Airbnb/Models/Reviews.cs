using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class Reviews
    {
        public int Id { get; set; }

        //  not something to be implemented but will leave it here anyway
        //[Required]
        //public Host User { get; set; } = new Host();

        [Required]
        [StringLength(1000)]
        public string Review { get; set; } = string.Empty;

        [Required]
        [Range(1, 5)]
        public int StarRating { get; set; } = 1;

        // for when i feel like not doing anything hard and want to work on database
        public string StayTime { get; set; } = string.Empty;

        public DateTime DateSent {  get; set; }

        public string Name { get; set; } = string.Empty;

        public int BookingInfoId { get; set; }
        public BookingInfo? BookingInfo { get; set; }
    }
}