using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class CatCard
    {
        public int Id { get; set; }

        [Required]
        public int BookingInfoId { get; set; }
        public BookingInfo? BookingInfo { get; set; }

        [Required]
        public int HostId { get; set; }
        public Host? Host { get; set; }

        [Required]
        public int CategoryId { get; set; }
        public Categories? Category { get; set; }

        public ICollection<CatCardImages>? Images { get; set; }
        public ICollection<Amenities>? Amenities { get; set; }
    }
}