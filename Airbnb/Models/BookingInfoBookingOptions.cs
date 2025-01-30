using Airbnb.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catbnb.Models
{
    public class BookingInfoBookingOptions
    {
        [ForeignKey("BookingOptionsId")]
        public int BookingOptionsId { get; set; }
        [ForeignKey("BookingInfoId")]
        public int BookingInfoId { get; set; }

        public BookingOptions? BookingOptions { get; set; }
        public BookingInfo? BookingInfo { get; set; }
    }
}
