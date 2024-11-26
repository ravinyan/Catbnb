using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Airbnb.Models
{
	public class CatCardModel
	{
		public int Id { get; set; }

        [Required]
        public BookingInfoModel? BookingInfo { get; set; }

        [Required]
        public int HostId { get; set; }
        public UserModel? Host { get; set; }

        [Required]
        public ICollection<CatCardImagesModel>? Images { get; set; } 

        [Required]
        public ICollection<AmenitiesModel>? Amenities { get; set; }
	}
}