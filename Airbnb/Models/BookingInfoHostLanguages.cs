using Airbnb.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catbnb.Models
{
    public class BookingInfoHostLanguages
    {
        [ForeignKey("HostLanguageId")]
        public int HostLanguageId { get; set; }
        [ForeignKey("BookingInfoId")]
        public int BookingInfoId { get; set; }

        public HostLanguages? HostLanguage { get; set; }
        public BookingInfo? BookingInfo { get; set; }
    }
}
