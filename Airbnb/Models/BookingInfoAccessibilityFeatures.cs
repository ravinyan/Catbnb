using Airbnb.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catbnb.Models
{
    public class BookingInfoAccessibilityFeatures
    {
        [ForeignKey("AccessibilityFeatureId")]
        public int AccessibilityFeatureId { get; set; }
        [ForeignKey("BookingInfoId")]
        public int BookingInfoId { get; set; }

        public AccessibilityFeatures? AccessibilityFeature { get; set; }
        public BookingInfo? BookingInfo { get; set; }
    }
}
