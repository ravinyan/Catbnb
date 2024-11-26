using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public int CatCardId { get; set; }
        public ICollection<CatCardModel>? CatCards { get; set; }
    }
}
