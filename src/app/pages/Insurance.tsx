import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Shield,
  TrendingDown,
  DollarSign,
  CheckCircle,
  Award,
  FileText,
  Download,
} from "lucide-react";

export function Insurance() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Insurance Partnership</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Save money while protecting your home
        </p>
      </div>

      {/* Partnership Status */}
      <Card className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/60 dark:to-blue-900/40 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <Shield className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Premium Partner Plan
              </h2>
              <Badge className="bg-blue-600 text-white w-fit">Active</Badge>
            </div>
            <p className="text-sm sm:text-base text-foreground mb-4">
              You're enrolled in the AquaGuard insurance partnership program with
              <span className="font-semibold"> SafeHome Insurance Co.</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/80 dark:bg-blue-950/60 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Annual Savings</p>
                <p className="text-xl sm:text-2xl font-semibold text-green-600">$480</p>
              </div>
              <div className="bg-white/80 dark:bg-blue-950/60 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Premium Discount</p>
                <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">15%</p>
              </div>
              <div className="bg-white/80 dark:bg-blue-950/60 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Claims Prevented</p>
                <p className="text-xl sm:text-2xl font-semibold text-purple-600 dark:text-purple-400">2</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Benefits Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="text-green-600" size={24} />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Risk Reduction Impact
            </h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Water Damage Risk</span>
                <span className="text-sm font-medium text-green-600">-67%</span>
              </div>
              <Progress value={33} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Reduced from High to Low since installation
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Claim Likelihood</span>
                <span className="text-sm font-medium text-green-600">-54%</span>
              </div>
              <Progress value={46} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Based on monitoring data and preventive actions
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <p className="text-sm text-green-800">
                <strong>Excellent Progress!</strong> Your proactive monitoring has
                significantly reduced your home's risk profile.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="text-blue-600" size={24} />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Program Benefits
            </h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-medium text-foreground">15% Premium Discount</p>
                <p className="text-sm text-muted-foreground">
                  Automatic monthly reduction on insurance premiums
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-medium text-foreground">Priority Claim Processing</p>
                <p className="text-sm text-muted-foreground">
                  Fast-track handling with documented sensor data
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-medium text-foreground">Free Equipment Replacement</p>
                <p className="text-sm text-muted-foreground">
                  No-cost sensor replacement if damaged during a covered event
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-medium text-foreground">Annual Inspection Included</p>
                <p className="text-sm text-muted-foreground">
                  Professional system check covered by insurance partner
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-medium text-foreground">Lower Deductible Option</p>
                <p className="text-sm text-muted-foreground">
                  Access to reduced deductibles for water damage claims
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Claims Prevention History */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Claims Prevention History
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b border-border">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="text-green-600" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Water Heater Leak Prevented
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Early detection of elevated humidity led to inspection and repair
                    before major damage occurred
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 flex-shrink-0">
                  Prevented
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>January 15, 2026</span>
                <span className="flex items-center gap-1">
                  <DollarSign size={14} />
                  Est. savings: $2,500
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="text-green-600" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Toilet Supply Line Issue Detected
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Unusual water usage pattern identified and resolved through
                    professional service
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 flex-shrink-0">
                  Prevented
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>November 8, 2025</span>
                <span className="flex items-center gap-1">
                  <DollarSign size={14} />
                  Est. savings: $1,800
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Documents */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Insurance Documents
        </h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={20} />
              <div>
                <p className="font-medium text-foreground">Partnership Agreement</p>
                <p className="text-sm text-muted-foreground">Signed: September 10, 2025</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              <Download size={16} />
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={20} />
              <div>
                <p className="font-medium text-foreground">Coverage Certificate</p>
                <p className="text-sm text-muted-foreground">Updated: January 1, 2026</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              <Download size={16} />
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={20} />
              <div>
                <p className="font-medium text-foreground">Monthly Report - February 2026</p>
                <p className="text-sm text-muted-foreground">Generated: March 1, 2026</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              <Download size={16} />
              Download
            </Button>
          </div>
        </div>
      </Card>

      {/* Contact Insurance Partner */}
      <Card className="p-6 bg-muted/50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">
              Need Help with Your Partnership?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact your dedicated insurance partner representative for questions
              about coverage, claims, or program benefits.
            </p>
            <Button>Contact SafeHome Insurance</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}